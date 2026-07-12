import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stars } from "@/components/sections/HeroSection";
import { Mail } from "lucide-react";
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const TERMS_SECTIONS = [
  {
    title: "INTRODUCTION",
    content: (
      <div className="space-y-4">
        <p>Welcome to Closeté.</p>
        <p>Closeté is a platform that enables users to buy and sell luxury items through a managed service including collection, authentication, and delivery.</p>
        <p>By using the app, you agree to these Terms & Conditions.</p>
      </div>
    )
  },
  {
    title: "OUR ROLE",
    content: (
      <div className="space-y-4">
        <p>Closeté acts as a facilitated marketplace that:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Connects buyers and sellers</li>
          <li>Manages collection, authentication, and delivery</li>
          <li>Processes payments securely</li>
        </ul>
        <p>Closeté is not the original owner of listed items.</p>
      </div>
    )
  },
  {
    title: "USER ACCOUNTS",
    content: (
      <div className="space-y-4">
        <p>Users agree to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide accurate information</li>
          <li>Maintain account security</li>
          <li>Accept responsibility for account activity</li>
        </ul>
        <p>Closeté may suspend or terminate accounts for misuse.</p>
      </div>
    )
  },
  {
    title: "SELLING ON CLOSETÉ",
    content: (
      <div className="space-y-4">
        <p>Sellers represent and warrant that:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Items are authentic and legally owned</li>
          <li>Listings are accurate (description, condition, images)</li>
        </ul>
        <p>Closeté reserves the right to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reject items during verification</li>
          <li>Remove listings</li>
          <li>Suspend sellers providing counterfeit or misleading items</li>
        </ul>
      </div>
    )
  },
  {
    title: "BUYING ON CLOSETÉ",
    content: (
      <div className="space-y-4">
        <p>Buyers agree to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Review listings before purchase</li>
          <li>Provide accurate delivery details</li>
        </ul>
        <p>All purchases are subject to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Authentication</li>
          <li>Successful verification</li>
        </ul>
      </div>
    )
  },
  {
    title: "AUTHENTICATION PROCESS",
    content: (
      <div className="space-y-4">
        <p>All items undergo a verification process using:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Internal expertise</li>
          <li>Third-party authentication tools</li>
        </ul>
        <p>Closeté performs authentication using best efforts and available technology.</p>
        <p>Authentication outcomes are:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Final and binding</li>
          <li>Based on inspection at the time of verification</li>
        </ul>
        <p>Closeté does not guarantee absolute authenticity beyond this process.</p>
      </div>
    )
  },
  {
    title: "PAYMENTS",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Payments are securely processed via third-party providers</li>
          <li>
            Funds are held until:
            <ul className="list-[circle] pl-5 mt-2 space-y-2">
              <li>Item is verified</li>
              <li>Buyer accepts delivery</li>
            </ul>
          </li>
        </ul>
        <p>Payment is only released to the seller after successful delivery acceptance</p>
      </div>
    )
  },
  {
    title: "COLLECTION & DELIVERY",
    content: (
      <div className="space-y-4">
        <p>Closeté manages:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Seller collection</li>
          <li>Buyer delivery</li>
        </ul>
        <p>Users must:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be available at scheduled times</li>
          <li>Provide accurate address details</li>
        </ul>
        <p>Closeté is not liable for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Delays caused by logistics partners</li>
          <li>Failed deliveries due to incorrect information</li>
        </ul>
      </div>
    )
  },
  {
    title: "REJECTION AT DELIVERY",
    content: (
      <div className="space-y-4">
        <p>At delivery, the buyer has the right to:</p>
        <p>Accept or reject the item</p>
        <p>If rejected:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The item is returned to the seller</li>
          <li>The buyer receives a full refund</li>
          <li>The seller is not paid</li>
        </ul>
        <p>This replaces the need for a traditional returns process</p>
      </div>
    )
  },
  {
    title: "DISPUTE RESOLUTION",
    content: (
      <div className="space-y-4">
        <p>Closeté's decisions regarding:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Authentication</li>
          <li>Item condition</li>
          <li>Listing accuracy</li>
        </ul>
        <p>Are final and binding</p>
        <p>Users agree to accept Closeté's determination in resolving disputes.</p>
      </div>
    )
  },
  {
    title: "CHARGEBACKS & FRAUD",
    content: (
      <div className="space-y-4">
        <p>Closeté reserves the right to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Contest chargebacks with evidence</li>
          <li>Suspend accounts involved in disputes</li>
          <li>Take action against fraudulent activity</li>
        </ul>
      </div>
    )
  },
  {
    title: "LIMITATION OF LIABILITY",
    content: (
      <div className="space-y-4">
        <p>To the fullest extent permitted by law:</p>
        <p>Closeté shall not be liable for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Indirect or consequential losses</li>
          <li>Loss of profits or opportunity</li>
          <li>Disputes between users</li>
        </ul>
        <p>Total liability is limited to:</p>
        <p>the value of the transaction in question</p>
      </div>
    )
  },
  {
    title: "PLATFORM USE",
    content: (
      <div className="space-y-4">
        <p>Closeté may:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Remove listings</li>
          <li>Suspend accounts</li>
          <li>Refuse service</li>
        </ul>
        <p>If users:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Attempt fraud</li>
          <li>Misuse the platform</li>
          <li>Circumvent processes</li>
        </ul>
      </div>
    )
  },
  {
    title: "CHANGES TO TERMS",
    content: (
      <div className="space-y-4">
        <p>Closeté may update these Terms at any time. Continued use of the app constitutes acceptance.</p>
      </div>
    )
  },
  {
    title: "CONTACT",
    content: (
      <div className="space-y-4">
        <p>Contact Information</p>
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-[#FFAF2C]" />
          <a href="mailto:support@closete.app" className="text-[#FFAF2C] hover:opacity-80 transition-all">
            support@closete.app
          </a>
        </div>
      </div>
    )
  }
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-transparent min-h-screen pb-24 text-white">
        
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
              <span className="text-white">Terms & Conditions</span>
            </h1>
            <p className={`text-gray-400 mt-6 text-sm md:text-base ${dmSans.className}`}>
              Last updated: June 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className={`container mx-auto px-4 max-w-7xl mt-24 md:mt-32 mb-20 ${dmSans.className}`}>
          <div className="bg-[#141517] p-[20px] md:p-6 lg:p-8 rounded-[20px] md:rounded-[28px] space-y-4">
            {TERMS_SECTIONS.map((section, index) => (
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
