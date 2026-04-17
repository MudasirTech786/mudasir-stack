import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Mudasir | Full Stack Web Developer",
  description:
    "Portfolio of Muhammad Mudasir — Full Stack Developer specializing in PHP, Laravel, Next.js, JavaScript, and scalable ERP systems.",
  keywords: [
    "Muhammad Mudasir",
    "Full Stack Developer",
    "Laravel Developer",
    "Next.js Developer",
    "PHP Developer",
    "ERP System",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Muhammad Mudasir" }],
  creator: "Muhammad Mudasir",
  openGraph: {
    title: "Muhammad Mudasir | Full Stack Web Developer",
    description:
      "Building modern web apps, ERP systems, and real-world business solutions.",
    siteName: "Mudasir Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Mudasir | Full Stack Web Developer",
    description:
      "Full Stack Developer building scalable systems with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#0b1721] text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}