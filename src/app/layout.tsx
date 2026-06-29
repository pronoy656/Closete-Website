import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Closete | Premium Marketing & Design",
  description: "Experience the next level of digital marketing and premium design with Closete.",
  keywords: ["marketing", "design", "premium", "agency", "digital", "seo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
