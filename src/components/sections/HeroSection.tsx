"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

// Stable star positions (avoids hydration mismatch from Math.random on server)
const STAR_POSITIONS = [
  { top: "4%",  left: "12%",  delay: "0.3s",  dur: "3.2s" },
  { top: "8%",  left: "35%",  delay: "1.1s",  dur: "2.7s" },
  { top: "5%",  left: "58%",  delay: "0.7s",  dur: "3.5s" },
  { top: "11%", left: "80%",  delay: "1.8s",  dur: "2.9s" },
  { top: "17%", left: "6%",   delay: "0.2s",  dur: "4.0s" },
  { top: "22%", left: "25%",  delay: "2.1s",  dur: "3.1s" },
  { top: "19%", left: "47%",  delay: "0.9s",  dur: "2.6s" },
  { top: "25%", left: "70%",  delay: "1.5s",  dur: "3.8s" },
  { top: "30%", left: "90%",  delay: "0.4s",  dur: "2.4s" },
  { top: "35%", left: "15%",  delay: "1.9s",  dur: "3.3s" },
  { top: "38%", left: "55%",  delay: "0.6s",  dur: "4.2s" },
  { top: "43%", left: "85%",  delay: "1.3s",  dur: "2.8s" },
  { top: "14%", left: "93%",  delay: "2.5s",  dur: "3.0s" },
  { top: "7%",  left: "72%",  delay: "1.0s",  dur: "3.6s" },
  { top: "28%", left: "40%",  delay: "0.8s",  dur: "2.5s" },
  { top: "2%",  left: "50%",  delay: "1.6s",  dur: "4.1s" },
  { top: "48%", left: "22%",  delay: "2.3s",  dur: "3.4s" },
  { top: "45%", left: "65%",  delay: "0.5s",  dur: "2.2s" },
  { top: "33%", left: "3%",   delay: "1.7s",  dur: "3.9s" },
  { top: "20%", left: "98%",  delay: "2.0s",  dur: "2.3s" },
];

// Expanded array for more falling particles, concentrated in the middle
const FALLING_PARTICLES = [
  // Middle section (heavily concentrated)
  { left: "40%", delay: 0.2, dur: 6.5 },
  { left: "45%", delay: 1.5, dur: 5.5 },
  { left: "50%", delay: 0.8, dur: 7.0 },
  { left: "55%", delay: 2.1, dur: 4.8 },
  { left: "60%", delay: 0.5, dur: 6.2 },
  { left: "35%", delay: 3.0, dur: 5.0 },
  { left: "65%", delay: 1.2, dur: 5.5 },
  { left: "48%", delay: 2.5, dur: 6.0 },
  { left: "52%", delay: 0.3, dur: 7.5 },
  { left: "42%", delay: 3.5, dur: 5.0 },
  { left: "58%", delay: 1.8, dur: 6.5 },
  { left: "38%", delay: 0.7, dur: 7.0 },
  { left: "62%", delay: 2.2, dur: 5.2 },
  { left: "47%", delay: 3.8, dur: 6.0 },
  { left: "53%", delay: 0.9, dur: 5.8 },
  { left: "44%", delay: 4.5, dur: 7.2 },
  { left: "56%", delay: 1.6, dur: 6.3 },
  { left: "32%", delay: 2.9, dur: 5.6 },
  { left: "68%", delay: 0.4, dur: 7.0 },
  { left: "30%", delay: 2.8, dur: 5.4 },
  { left: "70%", delay: 1.1, dur: 6.8 },
  { left: "50%", delay: 3.2, dur: 5.0 },
  { left: "49%", delay: 0.6, dur: 7.5 },
  { left: "51%", delay: 4.0, dur: 6.2 },
  { left: "41%", delay: 1.9, dur: 5.7 },
  { left: "59%", delay: 2.6, dur: 6.6 },
  { left: "36%", delay: 3.4, dur: 7.1 },
  { left: "64%", delay: 0.7, dur: 5.9 },
  { left: "46%", delay: 2.4, dur: 6.4 },
  { left: "54%", delay: 1.3, dur: 5.5 },

  // Slightly wider center
  { left: "25%", delay: 3.7, dur: 7.0 },
  { left: "75%", delay: 2.3, dur: 6.1 },
  { left: "28%", delay: 4.2, dur: 7.3 },
  { left: "72%", delay: 1.4, dur: 5.6 },
  
  // Minimal edges
  { left: "10%", delay: 3.1, dur: 8.2 },
  { left: "90%", delay: 0.5, dur: 6.7 },
  { left: "15%", delay: 4.8, dur: 5.9 },
  { left: "85%", delay: 1.7, dur: 7.4 },
  { left: "5%",  delay: 3.5, dur: 6.8 },
  { left: "95%", delay: 0.9, dur: 5.3 }
];

export const Stars = ({ animated = true }: { animated?: boolean }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {STAR_POSITIONS.map((s, i) => (
      <div
        key={i}
        className="absolute w-[3px] h-[3px] bg-white rounded-full"
        style={{
          top: s.top,
          left: s.left,
          opacity: animated ? 0.45 : 0.2,
          animation: animated ? `pulse ${s.dur} ${s.delay} infinite` : 'none',
        }}
      />
    ))}
    {animated && FALLING_PARTICLES.map((p, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-[2px] h-[2px] bg-white rounded-full"
        style={{ left: p.left }}
        initial={{ top: "-15%", opacity: 0 }}
        animate={{ 
          top: "100%", 
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: p.dur,
          repeat: Infinity,
          ease: "linear",
          delay: p.delay,
        }}
      />
    ))}
  </div>
);

const CAROUSEL_POSITIONS = [
  // 0: Center
  { xPx: 0, xVw: 0, scale: 1, opacity: 1, zIndex: 40, isCenter: true, overlayOpacity: 0 },
  
  // 1: Right-1
  { xPx: 50, xVw: 15, scale: 0.75, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
  
  // 2: Right-2
  { xPx: 95, xVw: 27, scale: 0.55, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
  
  // 3: Right-3
  { xPx: 135, xVw: 37, scale: 0.4, opacity: 0.8, zIndex: 20, isCenter: false, overlayOpacity: 0.7 },
  
  // 4: Right-4 (Far Edge)
  { xPx: 165, xVw: 45, scale: 0.3, opacity: 0.5, zIndex: 10, isCenter: false, overlayOpacity: 0.85 },
  
  // 5, 6: Hidden on the far RIGHT off-screen
  { xPx: 250, xVw: 65, scale: 0.2, opacity: 0, zIndex: 0, isCenter: false, overlayOpacity: 1 },
  { xPx: 250, xVw: 65, scale: 0.2, opacity: 0, zIndex: 0, isCenter: false, overlayOpacity: 1 },
  
  // 7: Hidden on the far LEFT off-screen
  { xPx: -250, xVw: -65, scale: 0.2, opacity: 0, zIndex: 0, isCenter: false, overlayOpacity: 1 },
  
  // 8: Left-4 (Far Edge)
  { xPx: -165, xVw: -45, scale: 0.3, opacity: 0.5, zIndex: 10, isCenter: false, overlayOpacity: 0.85 },
  
  // 9: Left-3
  { xPx: -135, xVw: -37, scale: 0.4, opacity: 0.8, zIndex: 20, isCenter: false, overlayOpacity: 0.7 },
  
  // 10: Left-2
  { xPx: -95, xVw: -27, scale: 0.55, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
  
  // 11: Left-1
  { xPx: -50, xVw: -15, scale: 0.75, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
];

const CAROUSEL_DATA = [
  { image: "/lux-bag-red.png", name: "Maren B.", likes: "2.4K", avatar: "linear-gradient(135deg, #d4af37, #9b6c26)" },
  { image: "/user-dior.jpg", name: "David S.", likes: "8.9K", avatar: "linear-gradient(135deg, #f6d365, #fda085)" },
  { image: "/lux-bag-lv.png", name: "Sarah K.", likes: "3.1K", avatar: "linear-gradient(135deg, #ff9a9e, #fecfef)" },
  { image: "/user-bag1.jpg", name: "Emma W.", likes: "2.1K", avatar: "linear-gradient(135deg, #fdfbfb, #ebedee)" },
  { image: "/user-heels.jpg", name: "Elena G.", likes: "4.2K", avatar: "linear-gradient(135deg, #84fab0, #8fd3f4)" },
  { image: "/user-gucci.jpg", name: "Oliver P.", likes: "3.7K", avatar: "linear-gradient(135deg, #ffecd2, #fcb69f)" },
  { image: "/user-ladies-bag.jpg", name: "Chloe M.", likes: "5.5K", avatar: "linear-gradient(135deg, #e0c3fc, #8ec5fc)" },
  { image: "/user-bag2.jpg", name: "Liam H.", likes: "6.4K", avatar: "linear-gradient(135deg, #cfd9df, #e2ebf0)" },
  { image: "/lux-bag-red.png", name: "Mia L.", likes: "1.2K", avatar: "linear-gradient(135deg, #fccb90, #d57eeb)" },
  { image: "/user-dior.jpg", name: "Sophia D.", likes: "4.8K", avatar: "linear-gradient(135deg, #a8edea, #fed6e3)" },
  { image: "/user-heels.jpg", name: "Jessica T.", likes: "950", avatar: "linear-gradient(135deg, #a18cd1, #fbc2eb)" },
  { image: "/user-bag1.jpg", name: "Alex R.", likes: "1.8K", avatar: "linear-gradient(135deg, #e5e5e5, #a3a3a3)" },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 12);
    }, 1500); // Rotate every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center"
      style={{ overflow: "hidden" }}
    >
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

      <Stars />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center pt-[125px] md:pt-40 pb-0">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className={`${playfair.className} font-light leading-[1.1] tracking-normal text-center mb-4`}
        >
          <span className="block mb-2 text-[36px] md:text-[72px] pb-1 md:pb-2" style={{
            background: "linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Buy <span className="font-['Georgia'] font-normal">&amp;</span> Sell
          </span>
          <span className="block text-[36px] md:text-[68px] pb-2" style={{
            background: "linear-gradient(89.94deg, #FFFFFF 52.51%, #999999 107.86%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Authentic Luxury, Safely
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="leading-relaxed mb-8 font-['DM_Sans'] text-[14px] md:text-[18px] text-white/90 font-light max-w-[850px] tracking-wide"
        >
          Closete is a curated marketplace for luxury fashion, combining authentication, secure payments, <br className="hidden md:block" />
          and controlled delivery – so you can buy and sell with complete confidence.
        </motion.p>

        {/* Dubai Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="inline-flex items-center justify-center gap-2.5 px-3 py-[10px] md:py-2.5 rounded-[32px] mb-10 w-fit max-w-[95vw] mx-auto"
          style={{ 
            background: "rgba(255, 255, 255, 0.08)", // Lighter premium glass
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderTop: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <span className="text-[#f2f2f2]/90 font-['DM_Sans'] text-[12px] sm:text-[13px] md:text-[15px] leading-snug flex-1 text-center md:text-left">
            Now live in <strong className="text-white font-['DM_Sans']">Dubai</strong>. Expanding <br className="block md:hidden" />
            across <span className="text-gradient-gold font-semibold font-['DM_Sans'] whitespace-nowrap">the UAE soon.</span>
          </span>
          {/* Pill-shaped Sparkle button matching the design */}
          <div
            className="w-[24px] h-[24px] md:w-[48px] md:h-[32px] rounded-full flex items-center justify-center flex-shrink-0 ml-1.5"
            style={{ background: "#ffffff" }}
          >
            <svg className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12.5 8 16 11.5 24 12C16 12.5 12.5 16 12 24C11.5 16 8 12.5 0 12C8 11.5 11.5 8 12 0Z" fill="black" stroke="black" strokeWidth="0.75" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 mb-[30px] md:mb-[74px] w-full max-w-[340px] md:max-w-none"
        >
          <GoldButton href="#ios" size="lg" className="flex items-center justify-center gap-2 w-full md:w-[280px] whitespace-nowrap">
            Download On iOS
            <ArrowRight color="black" className="w-5 h-5 flex-shrink-0" />
          </GoldButton>
          <GoldButton href="#android" size="lg" className="flex items-center justify-center gap-2 w-full md:w-[280px] whitespace-nowrap">
            Download On Android
            <ArrowRight color="black" className="w-5 h-5 flex-shrink-0" />
          </GoldButton>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 w-full relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
            }}
          >
            {CAROUSEL_DATA.map((item, index) => {
            const posIndex = (index - activeIndex + 12) % 12;
            const pos = CAROUSEL_POSITIONS[posIndex];
            
            const getClamp = (vw: number) => {
              const maxPx = vw * 12.5; // based on 1250px container
              const minBound = Math.min(0, maxPx);
              const maxBound = Math.max(0, maxPx);
              return `clamp(${minBound}px, ${vw}vw, ${maxBound}px)`;
            };

            return (
              <motion.div
                key={index}
                className="absolute overflow-hidden w-[240px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px]"
                initial={false}
                animate={{
                  x: `calc(-50% + ${pos.xPx}px + ${getClamp(pos.xVw)})`,
                  y: "-50%",
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                  boxShadow: pos.isCenter
                    ? "0 0 50px rgba(212,175,55,0.22), 0 24px 48px rgba(0,0,0,0.6)"
                    : "0 8px 32px rgba(0,0,0,0.4)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // Apple-style premium smooth ease
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  borderRadius: "16px",
                  border: pos.isCenter ? "2px solid transparent" : "none",
                  background: pos.isCenter 
                    ? "linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%) border-box"
                    : "none",
                  willChange: "transform, opacity, z-index, box-shadow", // Force hardware acceleration
                }}
              >
                {/* Card image */}
                <Image
                  src={item.image}
                  alt={`Luxury fashion item ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={pos.isCenter || pos.zIndex >= 20}
                />

                {/* User info bar - visible only on center card */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                    transition: "opacity 0.8s ease",
                    opacity: pos.isCenter ? 1 : 0,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        width: "26px",
                        height: "26px",
                        background: item.avatar,
                        border: "1.5px solid rgba(255,255,255,0.3)",
                      }}
                    />
                    <span className="text-white text-xs font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white text-xs">
                    <Heart size={13} className="text-white/90" />
                    <span>{item.likes}</span>
                  </div>
                </div>



                {/* Dark overlay for all cards, transitioning based on distance from center */}
                <div
                  className="absolute inset-0 pointer-events-none z-30 bg-black"
                  style={{ 
                    transition: "opacity 0.8s ease",
                    opacity: pos.overlayOpacity 
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
