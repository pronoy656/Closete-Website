import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Closeté | Authentic Luxury, Safely",
  description: "Buy & Sell Authentic Luxury, Safely with Closeté.",
  keywords: ["luxury", "authentic", "buy", "sell", "premium", "closete"],
  icons: {
    icon: "/1024.png",
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
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#f2f2f2] font-sans selection:bg-[#d4af37]/30">
        {children}
      </body>
    </html>
  );
}
