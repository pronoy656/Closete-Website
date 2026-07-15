import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stars } from "@/components/sections/HeroSection";
import { Mail, Globe } from "lucide-react";
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const PRIVACY_SECTIONS = [
  {
    title: "INTRODUCTION",
    content: (
      <div className="space-y-4">
        <p>Closeté (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data.</p>
        <p>This Privacy Policy explains how we collect, use, and protect your information when you use the Closeté mobile application and services.</p>
      </div>
    )
  },
  {
    title: "INFORMATION WE COLLECT",
    content: (
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-white/90">Account Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
        </div>
        
        <div>
          <p className="mb-2 text-white/90">Transaction & Listing Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Item details (photos, videos, descriptions)</li>
            <li>Pricing and listing data</li>
            <li>Purchase and order history</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90">Location & Delivery Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Collection address (for sellers)</li>
            <li>Delivery address (for buyers)</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90">Payment Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment details (processed securely via third-party providers)</li>
            <li>We do not store full card details</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90">Authentication Data</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Images and scans used for item verification</li>
            <li>Results of authentication checks</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90">Device & Usage Data</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Device type</li>
            <li>App usage</li>
            <li>Log data (for performance and security)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "HOW WE USE YOUR INFORMATION",
    content: (
      <div className="space-y-4">
        <p>We use your data to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Facilitate buying and selling of luxury items</li>
          <li>Arrange collection and delivery</li>
          <li>Authenticate items and prevent fraud</li>
          <li>Process payments securely</li>
          <li>Improve app performance and user experience</li>
          <li>Communicate updates, orders, and support</li>
        </ul>
      </div>
    )
  },
  {
    title: "AUTHENTICATION & FRAUD PREVENTION",
    content: (
      <div className="space-y-4">
        <p>Closeté uses a combination of:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Internal verification processes</li>
          <li>Third-party authentication tools</li>
        </ul>
        <p>We may analyze submitted item data to detect potential fraud and ensure platform trust.</p>
      </div>
    )
  },
  {
    title: "SHARING YOUR INFORMATION",
    content: (
      <div className="space-y-6">
        <p>We only share data when necessary:</p>
        
        <div>
          <p className="mb-2 text-white/90">With Service Providers</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment processors</li>
            <li>Delivery partners</li>
            <li>Authentication providers</li>
          </ul>
        </div>
        
        <div>
          <p className="mb-2 text-white/90">With Other Users</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Limited information (e.g. first name, listing details)</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90">Legal Requirements</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>If required by law or to protect our platform</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "DATA SECURITY",
    content: (
      <div className="space-y-4">
        <p>We implement appropriate security measures to protect your data, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Encrypted data transmission</li>
          <li>Secure storage systems</li>
          <li>Access controls</li>
        </ul>
      </div>
    )
  },
  {
    title: "YOUR RIGHTS",
    content: (
      <div className="space-y-4">
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access your data</li>
          <li>Request correction</li>
          <li>Request deletion</li>
          <li>Withdraw consent</li>
        </ul>
        <p>To do so, contact us at:</p>
        <a href="mailto:support@closete.app" className="text-[#FFAF2C] hover:underline transition-all inline-block">
          support@closete.app
        </a>
      </div>
    )
  },
  {
    title: "DATA RETENTION",
    content: (
      <div className="space-y-4">
        <p>We retain your data only as long as necessary to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide our services</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
        </ul>
      </div>
    )
  },
  {
    title: "LOCATION OF SERVICE",
    content: (
      <div className="space-y-4">
        <p>Closeté currently operates in Dubai, United Arab Emirates.</p>
        <p>Some features may be limited based on your location.</p>
      </div>
    )
  },
  {
    title: "UPDATES TO THIS POLICY",
    content: (
      <div className="space-y-4">
        <p>We may update this Privacy Policy from time to time.</p>
        <p>Changes will be reflected with an updated &quot;Last updated&quot; date.</p>
      </div>
    )
  },
  {
    title: "CONTACT US",
    content: (
      <div className="space-y-4">
        <p>For any questions:</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#FFAF2C]" />
            <a href="mailto:support@closete.app" className="text-[#FFAF2C] font-medium hover:opacity-80 transition-all">
              support@closete.app
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#FFAF2C]" />
            <a href="#" className="text-[#FFAF2C] font-medium hover:opacity-80 transition-all">
              Closeté
            </a>
          </div>
        </div>
      </div>
    )
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#111] min-h-screen pb-24 text-white">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-32 pb-8" style={{ minHeight: "350px" }}>
          {/* ── Layer 1: Wide outer glow ─────────────────────── */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1600px",
              height: "1000px",
              background:
                "radial-gradient(ellipse at 50% 18%, rgba(210,140,10,0.55) 0%, rgba(175,100,5,0.35) 30%, rgba(120,60,0,0.12) 55%, transparent 72%)",
              filter: "blur(8px)",
            }}
          />

          {/* ── Layer 2: Bright golden core ──────────────────── */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-8%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "900px",
              height: "700px",
              background:
                "radial-gradient(ellipse at 50% 12%, rgba(255,215,60,0.45) 0%, rgba(230,170,30,0.3) 28%, rgba(180,110,10,0.12) 52%, transparent 68%)",
              filter: "blur(4px)",
            }}
          />

          {/* ── Layer 3: Specular hot-spot (white-gold shine) ─ */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-4%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "360px",
              height: "260px",
              background:
                "radial-gradient(ellipse at 50% 10%, rgba(255,245,160,0.35) 0%, rgba(255,210,60,0.15) 38%, transparent 65%)",
              filter: "blur(2px)",
            }}
          />

          {/* ── Torchlight 1: Narrow Beam ──────────────────────── */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "550px",
              background: "linear-gradient(to bottom, transparent 0%, rgba(255,215,60,0.15) 5%, rgba(230,170,30,0.05) 40%, transparent 100%)",
              clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0 100%)",
              filter: "blur(140px)",
            }}
          />

          {/* ── Torchlight 2: Medium Beam ──────────────────────── */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "900px",
              height: "600px",
              background: "linear-gradient(to bottom, transparent 0%, rgba(210,140,10,0.12) 8%, rgba(180,110,10,0.03) 45%, transparent 100%)",
              clipPath: "polygon(42% 0, 58% 0, 100% 100%, 0 100%)",
              filter: "blur(180px)",
            }}
          />

          {/* ── Torchlight 3: Wide Beam ────────────────────────── */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1400px",
              height: "650px",
              background: "linear-gradient(to bottom, transparent 0%, rgba(175,100,5,0.08) 12%, rgba(120,60,0,0.02) 50%, transparent 100%)",
              clipPath: "polygon(46% 0, 54% 0, 100% 100%, 0 100%)",
              filter: "blur(220px)",
            }}
          />

          <Stars animated={false} />

          {/* Bottom fade to blend with dark background */}
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#111] to-transparent pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 space-y-2">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl ${playfair.className} font-semibold tracking-tight`}>
              <span className="text-gradient-gold block mb-2 text-3xl md:text-5xl lg:text-5xl tracking-normal">Closeté</span>
              <span className="text-white">Privacy Policy</span>
            </h1>
            <p className={`text-gray-400 mt-6 text-sm md:text-base ${dmSans.className}`}>
              Last updated: June 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className={`container mx-auto px-4 max-w-7xl mt-8 md:mt-12 mb-20 ${dmSans.className}`}>
          <div className="bg-[#141517] p-[20px] md:p-6 lg:p-8 rounded-[20px] md:rounded-[28px] space-y-4">
            {PRIVACY_SECTIONS.map((section, index) => (
              <div 
                key={index} 
                className="p-6 md:p-8 rounded-[12px] md:rounded-[20px] text-gray-400 shadow-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(to right, #1C1D20 0%, #2B2D32 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <h2 className="text-white font-bold text-[18px] md:text-[20px] tracking-wider mb-4">
                  {section.title}
                </h2>
                <div className="text-[14px] md:text-[17px] leading-normal text-gray-400 font-light">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
