import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/context/ThemeContext";
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
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#F7F7F8] dark:bg-[#0C0D11] text-[#111827] dark:text-[#F3F4F6] font-sans antialiased min-h-screen selection:bg-[#FF5500] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

