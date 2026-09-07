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
    title: "1. INTRODUCTION",
    content: (
      <div className="space-y-4">
        <p>Closeté (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data.</p>
        <p>This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information when you use the Closeté mobile application and related services.</p>
      </div>
    )
  },
  {
    title: "2. INFORMATION WE COLLECT",
    content: (
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-white/90 font-medium">Account Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Transaction &amp; Listing Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Item details (including photos, videos, descriptions, and condition)</li>
            <li>Pricing and listing information</li>
            <li>Purchase history</li>
            <li>Order history</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Collection &amp; Delivery Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Collection address (for Sellers)</li>
            <li>Delivery address (for Buyers)</li>
            <li>Collection and delivery status</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Payment Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment details processed securely by third-party payment providers</li>
            <li>We do not store your full payment card details</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Authentication Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Images and information submitted for authentication</li>
            <li>Authentication results</li>
            <li>Operational records relating to the authentication process</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Device &amp; Usage Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Device type</li>
            <li>Operating system</li>
            <li>App usage information</li>
            <li>Log data for security, diagnostics, and performance</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "3. HOW WE USE YOUR INFORMATION",
    content: (
      <div className="space-y-4">
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Facilitate the buying and selling of luxury items.</li>
          <li>Arrange collection and delivery.</li>
          <li>Authenticate items and protect against fraud.</li>
          <li>Process payments and refunds securely.</li>
          <li>Communicate order updates, notifications, and customer support.</li>
          <li>Improve the performance, security, and functionality of the Closeté platform.</li>
          <li>Comply with applicable legal and regulatory obligations.</li>
        </ul>
      </div>
    )
  },
  {
    title: "4. AUTHENTICATION & FRAUD PREVENTION",
    content: (
      <div className="space-y-4">
        <p>To maintain trust within the Closeté marketplace, we use a combination of:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Internal authentication procedures.</li>
          <li>Third-party authentication providers and tools.</li>
        </ul>
        <p>We may review item information, images, and related data to authenticate items, detect fraudulent activity, investigate disputes, and protect the integrity of the platform.</p>
      </div>
    )
  },
  {
    title: "5. SHARING YOUR INFORMATION",
    content: (
      <div className="space-y-6">
        <p>We only share your information where necessary to operate the Closeté platform.</p>

        <div>
          <p className="mb-1 text-white/90 font-medium">Service Providers</p>
          <p className="mb-2">Including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment processors</li>
            <li>Delivery and logistics partners</li>
            <li>Authentication providers</li>
            <li>Technology and cloud service providers</li>
          </ul>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Other Users</p>
          <p>We may share limited information necessary to complete a transaction, including listing information and first names where appropriate.</p>
        </div>

        <div>
          <p className="mb-2 text-white/90 font-medium">Legal Requirements</p>
          <p className="mb-2">We may disclose information where required by law or where reasonably necessary to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comply with legal obligations.</li>
            <li>Prevent fraud.</li>
            <li>Protect the rights, property, safety, or security of Closeté, our users, or third parties.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "6. DATA SECURITY",
    content: (
      <div className="space-y-4">
        <p>We implement appropriate technical and organisational measures designed to protect your personal information, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Encrypted data transmission.</li>
          <li>Secure storage systems.</li>
          <li>Access controls.</li>
          <li>Ongoing monitoring and security practices.</li>
        </ul>
        <p>While we take reasonable steps to protect your information, no method of electronic transmission or storage is completely secure.</p>
      </div>
    )
  },
  {
    title: "7. YOUR RIGHTS",
    content: (
      <div className="space-y-4">
        <p>Subject to applicable law, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access your personal information.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        <p>To exercise your rights, please contact:</p>
        <p>
          Email:{" "}
          <a href="mailto:Closeteapp@gmail.com" className="text-[#FFAF2C] hover:underline transition-all">
            Closeteapp@gmail.com
          </a>
        </p>
      </div>
    )
  },
  {
    title: "8. DATA RETENTION",
    content: (
      <div className="space-y-4">
        <p>We retain personal information only for as long as reasonably necessary to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide our services.</li>
          <li>Complete transactions.</li>
          <li>Meet legal and regulatory obligations.</li>
          <li>Resolve disputes.</li>
          <li>Enforce our agreements.</li>
        </ul>
      </div>
    )
  },
  {
    title: "9. INTERNATIONAL TRANSFERS",
    content: (
      <div className="space-y-4">
        <p>Closeté currently operates in Dubai, United Arab Emirates.</p>
        <p>Your information may be processed or stored by trusted third-party service providers located in other jurisdictions where necessary to provide our services. Where applicable, we take reasonable steps to ensure your information receives an appropriate level of protection.</p>
      </div>
    )
  },
  {
    title: "10. UPDATES TO THIS POLICY",
    content: (
      <div className="space-y-4">
        <p>We may update this Privacy Policy from time to time.</p>
        <p>Any changes will become effective when the updated Privacy Policy is published within the Closeté platform and the &ldquo;Last updated&rdquo; date is revised.</p>
      </div>
    )
  },
  {
    title: "11. CONTACT US",
    content: (
      <div className="space-y-4">
        <p>For any questions regarding this Privacy Policy or your personal information, please contact:</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#FFAF2C]" />
            <a href="mailto:Closeteapp@gmail.com" className="text-[#FFAF2C] font-medium hover:opacity-80 transition-all">
              Closeteapp@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#FFAF2C]" />
            <span className="text-[#FFAF2C] font-medium">
              Closeté
            </span>
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
              <span className="text-white">Privacy Policy</span>
            </h1>
            <p className={`text-gray-400 mt-6 text-sm md:text-base ${dmSans.className}`}>
              Last updated: June 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className={`container mx-auto px-4 max-w-7xl mt-8 md:mt-12 mb-6 md:mb-8 ${dmSans.className}`}>
          <div className="bg-[#141517] p-[20px] md:p-6 lg:p-8 rounded-[20px] md:rounded-[28px] space-y-4">
            {PRIVACY_SECTIONS.map((section, index) => (
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
