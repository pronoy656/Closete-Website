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
    <section 
      id="our-vision" 
      className="relative w-full min-h-[600px] md:min-h-[850px] bg-[#0a0a0a] text-white flex flex-col items-center justify-start overflow-hidden px-6 pt-16 md:pt-20 pb-40 md:pb-52 font-sans scroll-mt-16"
    >
      
      {/* Background Particle/Star Effect (Simplified with CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Premium Masked Dot Grid */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.25]"
          style={{ 
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px)', 
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at center, black, transparent)',
            maskImage: 'radial-gradient(ellipse 65% 60% at center, black, transparent)'
          }}
        ></div>
        
        {/* Golden glow gradient behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[1400px] h-[220%] opacity-15"
             style={{ 
               background: "linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%)", 
               filter: "blur(120px)",
               WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 85%)",
               maskImage: "radial-gradient(ellipse at center, black 0%, transparent 85%)"
             }}
        />

        {/* Top gradient overlay to blend seamlessly with the section above */}
        <div className="absolute top-0 left-0 w-full h-[100px] md:h-[150px] bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        
        {/* Bottom gradient overlay to blend seamlessly with the section below */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent" />

        {/* Left gradient overlay to blend seamlessly with the edges */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        
        {/* Right gradient overlay to blend seamlessly with the edges */}
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-5xl text-center space-y-12">
        {/* Header Text */}
        <div className="space-y-4 relative">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Our Vision</h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: "rgba(242,242,242,0.75)", fontSize: "18px", wordSpacing: "1px" }}
            className="max-w-xl mx-auto leading-relaxed"
          >
            Closete was created to bring trust, transparency, and simplicity to the luxury resale market.
          </motion.p>
        </div>

        {/* Hero Text */}
        <div className="mt-32 md:mt-48 relative">
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
      <div className="absolute inset-0 w-full max-w-[1920px] mx-auto pointer-events-none">
        {/* Top Left: Shield/Lock Icon */}
        <div className="absolute top-[30%] left-[14%] hidden md:block transition-transform hover:scale-105 pointer-events-auto">
          <div className="relative w-[180px] h-[180px]">
            <Image 
              src="/Group 1707483227.png" 
              alt="Shield Icon" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Top Right: Watch Image */}
        <div className="absolute top-[27%] right-[10%] rotate-[12deg] transition-transform hover:scale-105 hidden md:block pointer-events-auto">
          <div className="relative inline-flex items-center justify-center shadow-2xl">
            {/* Background Image / Frame */}
            <Image 
              src="/Rectangle 34626008.png"
              alt="Watch Frame Background"
              width={340}
              height={260}
              className="w-[200px] md:w-[240px] h-auto object-contain drop-shadow-2xl"
            />
            {/* Foreground Watch Image */}
            <div className="absolute inset-2 md:inset-2.5 rounded-xl md:rounded-[18px] overflow-hidden">
              <Image 
                src="/Rectangle 34626007 (1).png"
                alt="Luxury Watch"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Left: Bag Image */}
        <div className="absolute bottom-[2%] left-[14%] -rotate-[12deg] transition-transform hover:scale-105 hidden md:block pointer-events-auto">
          <div className="relative inline-flex items-center justify-center shadow-2xl">
            {/* Background Image / Frame */}
            <Image 
              src="/Rectangle 34626008 (1).png"
              alt="Bag Frame Background"
              width={340}
              height={260}
              className="w-[200px] md:w-[240px] h-auto object-contain drop-shadow-2xl"
            />
            {/* Foreground Bag Image */}
            <div className="absolute inset-2 md:inset-2.5 rounded-xl md:rounded-[18px] overflow-hidden">
              <Image 
                src="/Rectangle 34626007 (2).png"
                alt="Luxury Handbag"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Right: Crown Icon */}
        <div className="absolute bottom-[2%] right-[15%] hidden md:block transition-transform hover:scale-105 pointer-events-auto">
          <div className="relative w-[180px] h-[180px]">
            <Image 
              src="/Group 1707483228.png" 
              alt="Crown Icon" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
