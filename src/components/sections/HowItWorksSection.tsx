"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const steps = [
  {
    number: "01",
    title: "LIST OR DISCOVER",
    desc: "Browse a curated selection of luxury pieces or list your own in minutes with guided pricing and intelligent recommendations.",
  },
  {
    number: "02",
    title: "AUTHENTICATION",
    desc: "Each item undergoes a structured verification process using advanced AI and expert review to ensure authenticity.",
  },
  {
    number: "03",
    title: "SECURE DELIVERY & PAYMENT",
    desc: "Items are delivered securely, and payment is only released once the buyer has received and accepted the item.",
  },
];

const desktopCards = [
  { ...steps[0], x: 540, y: 10, w: 800, h: 180 },
  { ...steps[1], x: 720, y: 220, w: 800, h: 180 },
  { ...steps[2], x: 540, y: 430, w: 800, h: 180 },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10 max-w-7xl pt-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="font-serif text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How Closete works
          </h2>
          <p style={{ color: "rgba(242,242,242,0.75)", fontSize: "18px", wordSpacing: "1px", letterSpacing: "0.5px" }}>
            Discover, verify, and receive luxury pieces with complete confidence.
          </p>
        </motion.div>

        {/* ── Desktop View (>= lg) ── */}
        <div className="hidden lg:block relative w-full max-w-[1400px] mx-auto aspect-[1400/640] -ml-8 lg:-ml-12 xl:-ml-20">
          
          <style>
            {`
              @keyframes dash-flow {
                from { stroke-dashoffset: 26; }
                to { stroke-dashoffset: 0; }
              }
              .animate-flow {
                animation: dash-flow 1.5s linear infinite;
              }
            `}
          </style>

          {/* Background Glow Image */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "-200px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "390px",
              height: "550px",
              zIndex: 0,
              mixBlendMode: "screen",
              opacity: 0.9,
            }}
          >
            <Image
              src="/Frame 2087328317.png"
              alt="Background stars and rays"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Soft Golden Connection Glow */}
          <div
            className="absolute pointer-events-none z-0"
            style={{
              left: "-340px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "1000px",
              height: "600px",
              background: "linear-gradient(to right, transparent 20%, rgba(201, 140, 40, 0.15) 50%, rgba(150, 150, 150, 0.1) 85%, transparent 100%)",
              filter: "blur(60px)",
            }}
          />

          {/* SVG Lines & Circle */}
          <svg viewBox="0 0 1400 640" overflow="visible" className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="4.77%" stopColor="#AF7413" stopOpacity="1" />
                <stop offset="19.33%" stopColor="#C98C28" stopOpacity="1" />
                <stop offset="38.93%" stopColor="#E2B744" stopOpacity="1" />
                <stop offset="50.54%" stopColor="#FFED81" stopOpacity="1" />
                <stop offset="62.1%" stopColor="#E1C24E" stopOpacity="1" />
                <stop offset="90.74%" stopColor="#A06008" stopOpacity="1" />
              </linearGradient>

              {/* Define the paths for both drawing and animation */}
              <path id="path1" d="M 262 280 L 420 280 Q 440 280, 440 260 L 440 130 Q 440 110, 460 110 L 540 110" />
              <path id="path2" d="M 1240 110 L 1420 110 Q 1440 110, 1440 130 L 1440 260 Q 1440 280, 1420 280 L 1370 280" />
              <path id="path3" d="M 1370 360 L 1420 360 Q 1440 360, 1440 380 L 1440 510 Q 1440 530, 1420 530 L 1240 530" />
              <path id="path4" d="M 540 530 L 460 530 Q 440 530, 440 510 L 440 380 Q 440 360, 420 360 L 262 360" />
            </defs>

            {/* Circle */}
            <circle cx="160" cy="320" r="110" fill="url(#circleGrad)" />
            <circle cx="160" cy="320" r="110" fill="none" stroke="rgba(255,220,80,0.7)" strokeWidth="2" />
            <text x="160" y="332" textAnchor="middle" fontFamily="Georgia, serif" fontSize="42" fontWeight="400" fill="#1a0e02">
              Closeté
            </text>

            {/* Draw the dashed paths */}
            <use href="#path1" className="animate-flow" fill="none" stroke="rgba(180,140,30,0.55)" strokeWidth="1.5" strokeDasharray="6 7" strokeLinecap="round" />
            <use href="#path2" className="animate-flow" fill="none" stroke="rgba(180,140,30,0.55)" strokeWidth="1.5" strokeDasharray="6 7" strokeLinecap="round" />
            <use href="#path3" className="animate-flow" fill="none" stroke="rgba(180,140,30,0.55)" strokeWidth="1.5" strokeDasharray="6 7" strokeLinecap="round" />
            <use href="#path4" className="animate-flow" fill="none" stroke="rgba(180,140,30,0.55)" strokeWidth="1.5" strokeDasharray="6 7" strokeLinecap="round" />

            {/* Moving Arrows */}
            {/* Path 1 Arrows */}
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path1" />
              </animateMotion>
            </g>
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path1" />
              </animateMotion>
            </g>

            {/* Path 2 Arrows */}
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path2" />
              </animateMotion>
            </g>
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="4s" begin="2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path2" />
              </animateMotion>
            </g>

            {/* Path 3 Arrows */}
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path3" />
              </animateMotion>
            </g>
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="4s" begin="2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path3" />
              </animateMotion>
            </g>

            {/* Path 4 Arrows */}
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path4" />
              </animateMotion>
            </g>
            <g fill="rgba(255,220,80,0.9)">
              <polygon points="-8,-6 4,0 -8,6" />
              <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#path4" />
              </animateMotion>
            </g>
          </svg>

          {/* Cards */}
          {desktopCards.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                position: "absolute",
                left: `${(step.x / 1400) * 100}%`,
                top: `${(step.y / 640) * 100}%`,
                width: `${(step.w / 1400) * 100}%`,
                height: `${(step.h / 640) * 100}%`,
              }}
              className="flex items-center gap-4 xl:gap-8 z-10"
            >
              <div className={`shrink-0 text-[50px] xl:text-[70px] font-bold select-none leading-none bg-gradient-to-b from-[#C99C41] to-[#6A501E] bg-clip-text text-transparent ${bebasNeue.className}`}>
                {step.number}.
              </div>
              <div 
                className="relative w-full h-full p-[1px] rounded-[1.2rem] overflow-hidden group shadow-xl"
                style={{
                  background: 'linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div 
                  className="relative w-full h-full backdrop-blur-md p-5 xl:px-8 xl:py-6 rounded-[1.1rem] flex flex-col justify-center"
                  style={{ background: "linear-gradient(270.21deg, #2B2D32 -23.83%, #1C1D20 92.92%)" }}
                >
                  <h3 className="text-white text-sm xl:text-base font-bold tracking-[0.08em] mb-2 xl:mb-2.5 uppercase">
                    {step.title}
                  </h3>
                  <p className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent text-[18px] leading-relaxed pr-2 xl:pr-6">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile & Tablet View (< lg) ── */}
        <div className="lg:hidden flex flex-col items-center relative w-full pt-4 pb-12">
          
          {/* Background Glow Image for Mobile */}
          <div
            className="absolute pointer-events-none z-0"
            style={{
              left: "50%",
              top: "-310px",
              marginLeft: "-375px",
              width: "390px",
              height: "550px",
              mixBlendMode: "screen",
              opacity: 1,
            }}
          >
            <Image
              src="/Frame 2087328317.png"
              alt="Background stars and rays"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* Circle at Top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-[150px] h-[150px] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(201,156,65,0.25)] border-[2px] border-[rgba(255,220,80,0.6)] z-10" 
            style={{ background: 'linear-gradient(90deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)' }}
          >
            <span className="font-serif text-3xl text-[#1a0e02]">Closeté</span>
          </motion.div>

          {/* Stacked Cards */}
          <div className="flex flex-col w-full max-w-sm relative mt-4 z-0">
            {/* Connecting vertical dashed line */}
            <div className="absolute left-1/2 top-0 bottom-10 w-px border-l border-dashed border-[rgba(180,140,30,0.5)] -translate-x-1/2 z-0" />

            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full relative flex flex-col mb-10 z-10"
              >
                {/* Arrow */}
                <div className="w-full flex justify-center mb-4 z-10 pt-2">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="rgba(201,140,40,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Number */}
                <div className={`w-full flex ${i === 1 ? 'justify-end' : 'justify-start'} px-6 mb-[-2px] z-20 relative`}>
                  <div className={`text-[60px] font-bold leading-none bg-gradient-to-b from-[#C99C41] to-[#6A501E] bg-clip-text text-transparent ${bebasNeue.className}`}>
                    {step.number}.
                  </div>
                </div>

                {/* Card */}
                <div 
                  className="relative w-full p-[1px] rounded-[1.2rem] shadow-xl z-10"
                  style={{ background: 'linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)' }}
                >
                  <div 
                    className="relative w-full h-full backdrop-blur-md p-6 rounded-[1.1rem] flex flex-col justify-center"
                    style={{ background: "linear-gradient(270.21deg, #2B2D32 -23.83%, #1C1D20 92.92%)" }}
                  >
                    <h3 className="text-white text-sm sm:text-base font-bold tracking-[0.08em] mb-2 uppercase">
                      {step.title}
                    </h3>
                    <p className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent text-[18px] leading-relaxed pr-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

