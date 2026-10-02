import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, inquiryType, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || "janakanamal.mails@gmail.com";
    const emailSubject = `Portfolio Contact: ${inquiryType || "General Inquiry"} from ${name}`;

    const formattedMessage = `
Name: ${name}
Email: ${email}
Organization: ${organization || "N/A"}
Service Interest: ${inquiryType || "General Inquiry"}

Message:
${message}
    `.trim();

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e5e7; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
        <!-- Header Banner -->
        <div style="background-color: #1E1E24; padding: 28px 32px; border-top: 4px solid #FF5500;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td>
                <span style="display: inline-block; background-color: #FF5500; color: #ffffff; font-weight: 800; font-size: 14px; width: 28px; height: 28px; line-height: 28px; text-align: center; border-radius: 8px; margin-right: 8px;">J</span>
                <span style="color: #ffffff; font-weight: 800; font-size: 16px; letter-spacing: -0.3px;">Janaka<span style="color: #FF5500;">.</span></span>
                <span style="color: #8E8E93; font-size: 11px; margin-left: 10px; font-family: monospace; letter-spacing: 0.5px;">PORTFOLIO DIRECT</span>
              </td>
            </tr>
          </table>
          <h2 style="color: #ffffff; font-weight: 900; font-size: 22px; margin: 18px 0 4px 0; letter-spacing: -0.5px;">New Project Inquiry</h2>
          <p style="color: #A1A1AA; font-size: 13px; margin: 0;">A potential client has submitted details via your contact form.</p>
        </div>

        <!-- Body Content -->
        <div style="padding: 32px;">
          <!-- Inquiry Badge -->
          <div style="margin-bottom: 24px;">
            <span style="background-color: #FFF2EC; color: #FF5500; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(255, 85, 0, 0.2); display: inline-block;">
              ${inquiryType || "Full Stack Engineering"}
            </span>
          </div>

          <!-- Client Info Table -->
          <div style="background-color: #F8F9FA; border: 1px solid #EAEAEA; border-radius: 14px; padding: 20px 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 6px 0; color: #71717A; font-weight: 600; width: 120px;">Client Name:</td>
                <td style="padding: 6px 0; color: #09090B; font-weight: 700; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #71717A; font-weight: 600;">Email Address:</td>
                <td style="padding: 6px 0;">
                  <a href="mailto:${email}" style="color: #FF5500; font-weight: 700; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #71717A; font-weight: 600;">Organization:</td>
                <td style="padding: 6px 0; color: #09090B; font-weight: 600;">${organization || "N/A"}</td>
              </tr>
            </table>
          </div>

          <!-- Message Details -->
          <div style="margin-bottom: 28px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #71717A; margin-bottom: 8px;">
              Project Details & Message:
            </div>
            <div style="background-color: #FFFFFF; border: 1px solid #E4E4E7; border-left: 4px solid #FF5500; border-radius: 12px; padding: 18px 20px; color: #18181B; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <!-- Reply Button -->
          <div style="text-align: center; margin: 32px 0 16px 0;">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(emailSubject)}" style="display: inline-block; background-color: #FF5500; color: #ffffff; font-weight: 700; font-size: 13px; text-decoration: none; padding: 14px 32px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(255, 85, 0, 0.25);">
              Reply Directly to ${name} &rarr;
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #F4F4F5; padding: 20px 32px; border-top: 1px solid #E4E4E7; text-align: center; font-size: 11px; color: #71717A;">
          <p style="margin: 0 0 4px 0;">Sent automatically from your portfolio contact form.</p>
          <p style="margin: 0; color: #A1A1AA;">Target Recipient: ${recipientEmail}</p>
        </div>
      </div>
    `;

    // 1. Primary Email Provider: Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY.trim()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: emailSubject,
            html: htmlContent,
            text: formattedMessage,
          }),
        });

        let resendData: any = {};
        const resendContentType = resendRes.headers.get("content-type");
        if (resendContentType && resendContentType.includes("application/json")) {
          resendData = await resendRes.json();
        } else {
          const rawText = await resendRes.text();
          console.error("Resend API non-JSON response:", rawText);
          resendData = { message: "Resend returned a non-JSON response." };
        }

        if (resendRes.ok) {
          return NextResponse.json({ success: true, provider: "resend", id: resendData.id });
        } else {
          console.error("Resend API error:", resendData);
          return NextResponse.json(
            {
              error: resendData.message || "Resend API failed to send the email.",
              details: resendData,
            },
            { status: resendRes.status || 400 }
          );
        }
      } catch (err) {
        console.error("Resend fetch exception:", err);
        return NextResponse.json(
          { error: "Failed to connect to Resend API." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: "RESEND_API_KEY is missing in your .env file." },
      { status: 500 }
    );
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email. Please try again later.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
