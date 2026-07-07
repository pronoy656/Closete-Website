"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TypingText = ({ text, className = "", highlight = true }: { text: string; className?: string; highlight?: boolean }) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { color: "rgba(242, 242, 242, 0.2)" }, // ash/grey by default
            visible: { color: highlight ? "rgba(255, 255, 255, 1)" : "rgba(242, 242, 242, 0.2)" }
          }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export function VisionSection() {
  return (
    <section id="our-vision" className="relative w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden px-6 pt-16 md:pt-30 pb-24 font-sans">
      
      {/* Background Particle/Star Effect (Simplified with CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle tiny dots */}
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        
        {/* Top gradient overlay to blend seamlessly with the section above */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        
        {/* Bottom gradient overlay to blend seamlessly with the section below */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-5xl text-center space-y-12">
        {/* Gradient glow matching the How It Works section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1600px] h-[100%] pointer-events-none -z-10"
             style={{ 
               background: "linear-gradient(to right, transparent 20%, rgba(201, 140, 40, 0.15) 50%, rgba(150, 150, 150, 0.1) 85%, transparent 100%)", 
               filter: "blur(60px)",
               WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
               maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
             }}
        />
        
        {/* Header Text */}
        <div className="space-y-4 relative">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Our Vision</h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed"
          >
            Closete was created to bring trust, transparency, and simplicity to the luxury resale market.
          </motion.p>
        </div>

        {/* Hero Text */}
        <div className="mt-20 relative">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                  delayChildren: 0.2,
                }
              }
            }}
            className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold uppercase tracking-wide leading-[1.6] text-center w-full max-w-6xl relative z-10 font-sans"
          >
            <TypingText text="WE BELIEVE BUYING AND SELLING HIGH-VALUE " highlight={true} />
            <br className="hidden md:block" />
            <TypingText text="ITEMS SHOULD FEEL SEAMLESS, SECURE, AND " highlight={true} />
            <br className="hidden md:block" />
            <TypingText text="PREMIUM AT EVERY STEP." highlight={true} />
          </motion.h1>
        </div>
      </div>

      {/* --- FLOATING DECORATIONS --- */}

      {/* Top Left: Shield/Lock Icon */}
      <div className="absolute top-[20%] left-[10%] hidden md:block transition-transform hover:scale-105">
        <div className="relative w-38 h-38">
          <Image 
            src="/Group 1707483227.png" 
            alt="Shield Icon" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* Top Right: Watch Image */}
      <div className="absolute top-[15%] right-[10%] rotate-12 transition-transform hover:scale-105 hidden md:block">
        <div className="relative w-48 h-64 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <Image 
            src="/louis-vuitton-watch.jpg"
            alt="Luxury Watch"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Left: Bag Image */}
      <div className="absolute bottom-[15%] left-[8%] -rotate-6 transition-transform hover:scale-105 hidden md:block">
        <div className="relative w-56 h-40 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <Image 
            src="/luxury-handbag-1.jpg"
            alt="Luxury Handbag"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Right: Crown Icon */}
      <div className="absolute bottom-[20%] right-[15%] hidden md:block transition-transform hover:scale-105">
        <div className="relative w-[152px] h-[152px]">
          <Image 
            src="/Group 1707483228.png" 
            alt="Crown Icon" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

    </section>
  );
}
