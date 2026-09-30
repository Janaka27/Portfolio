import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T.M. Janaka Namal Thennakoon — Software Engineering Undergraduate & Full Stack Developer",
  description: "Portfolio of Janaka Namal Thennakoon, Software Engineering Undergraduate & Full Stack Developer specializing in Laravel, Next.js, React, RESTful APIs, and scalable backend architecture.",
  keywords: ["Janaka Namal Thennakoon", "Full Stack Developer", "Backend Developer", "Laravel", "Next.js", "React", "Python", "Flask", "MySQL", "PostgreSQL", "Sri Lanka"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/my_favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-ink-black text-eggshell font-sans antialiased min-h-screen selection:bg-dusty-denim selection:text-ink-black">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

