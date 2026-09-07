import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stars } from "@/components/sections/HeroSection";
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const DELIVERY_SECTIONS = [
  {
    title: "1. OVERVIEW",
    content: (
      <div className="space-y-4">
        <p>Closeté operates an authentication-before-delivery model.</p>
        <p>Every item is:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Collected</li>
          <li>Authenticated</li>
          <li>Delivered only after successful authentication</li>
        </ul>
      </div>
    )
  },
  {
    title: "2. NO TRADITIONAL RETURNS",
    content: (
      <div className="space-y-4">
        <p>Closeté does not operate a traditional returns policy.</p>
        <p>This is because:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Buyers inspect items at the point of delivery.</li>
          <li>Acceptance takes place before payment is released to the Seller.</li>
          <li>Once an item has been accepted, the transaction is considered final.</li>
        </ul>
      </div>
    )
  },
  {
    title: "3. BUYER ACCEPTANCE AT DELIVERY",
    content: (
      <div className="space-y-6">
        <p>At delivery, the Buyer may:</p>

        <div>
          <p className="mb-2 text-white/90 font-medium">Accept the item</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The transaction is completed.</li>
            <li>Payment is released to the Seller.</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Reject the item</p>
          <div className="space-y-4">
            <div>
              <p className="mb-2">If the item is rejected because it is not as described, its condition materially differs from the listing, or due to an issue attributable to Closeté or the Seller:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The item is returned to the Seller.</li>
                <li>The Buyer receives a full refund.</li>
                <li>The Seller is not paid.</li>
              </ul>
            </div>

            <div>
              <p className="mb-2">If the item is rejected solely due to a change of mind, personal preference, or any reason unrelated to the item&apos;s authenticity, condition, or conformity with its listing:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The item is returned to the Seller.</li>
                <li>The Buyer receives a refund less the applicable Closeté Handling Fee.</li>
                <li>The Seller is not paid.</li>
              </ul>
            </div>

            <p>Repeated instances of rejecting items due to a change of mind may result in Closeté restricting or suspending the Buyer&apos;s account.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "4. AUTHENTICATION PROTECTION",
    content: (
      <div className="space-y-4">
        <p>If an item:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fails authentication; or</li>
          <li>Is materially different from its listing,</li>
        </ul>
        <p>Closeté will:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cancel the transaction.</li>
          <li>Refund the Buyer in full.</li>
          <li>Return the item to the Seller.</li>
        </ul>
      </div>
    )
  },
  {
    title: "5. FINAL SALE AFTER ACCEPTANCE",
    content: (
      <div className="space-y-4">
        <p>Once the Buyer accepts the item at delivery, the transaction is final.</p>
        <p>Closeté is not responsible for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Change of mind after acceptance.</li>
          <li>Fit or sizing preferences.</li>
          <li>Subjective preferences that were apparent at the time of delivery.</li>
        </ul>
      </div>
    )
  },
  {
    title: "6. FRAUD PREVENTION",
    content: (
      <div className="space-y-4">
        <p>Closeté may:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Perform additional authentication or verification checks.</li>
          <li>Delay or cancel transactions where fraudulent or suspicious activity is suspected.</li>
          <li>Suspend or terminate accounts involved in fraudulent activity.</li>
        </ul>
      </div>
    )
  },
  {
    title: "7. DAMAGED ITEMS",
    content: (
      <div className="space-y-4">
        <p>If an item is damaged while in Closeté&apos;s possession or control:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The matter will be investigated.</li>
          <li>An appropriate resolution will be determined at Closeté&apos;s discretion.</li>
        </ul>
      </div>
    )
  }
];

export default function DeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#111] min-h-screen pb-0 text-white">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-32 pb-8 min-h-[250px] md:min-h-[350px]">
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
              <span className="text-gradient-gold block mb-2 text-5xl md:text-6xl lg:text-6xl tracking-normal">Closeté</span>
              <span className="text-white">Authenticity & Delivery Policy</span>
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className={`container mx-auto px-4 max-w-7xl mt-8 md:mt-12 mb-6 md:mb-8 ${dmSans.className}`}>
          <div className="bg-[#141517] border border-white/5 p-[20px] md:p-6 lg:p-8 rounded-[20px] md:rounded-[28px] space-y-4">
            {DELIVERY_SECTIONS.map((section, index) => (
              <div 
                key={index} 
                className="p-6 md:p-8 rounded-[12px] md:rounded-[20px] text-gray-400 shadow-2xl relative"
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
