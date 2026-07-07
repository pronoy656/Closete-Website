"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });

const POSITIONS = [
  // 0: Center
  { xPx: 0, xVw: 0, scale: 1.05, zIndex: 40, isCenter: true },
  // 1: Right-1
  { xPx: 100, xVw: 12, scale: 0.9, zIndex: 30, isCenter: false },
  // 2: Far Right
  { xPx: 250, xVw: 20, scale: 0.75, zIndex: 20, isCenter: false },
  // 3: Far Left
  { xPx: -250, xVw: -20, scale: 0.75, zIndex: 20, isCenter: false },
  // 4: Left-1
  { xPx: -105, xVw: -12, scale: 0.9, zIndex: 30, isCenter: false },
];

const MOCKUP_IMAGES = [
  "/Subtract.png", // Initially Center
  "/Subtract (3).png", // Initially Right-1
  "/Subtract (4).png", // Initially Far Right
  "/Subtract (1).png", // Initially Far Left
  "/Subtract (2).png", // Initially Left-1
];

export function AppMockupsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % 5);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + 5) % 5);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section id="app-preview" className={`bg-[#0a0a0a] pt-30 pb-12 overflow-hidden text-white ${dmSans.className}`}>
      {/* --- HEADER --- */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-16 space-y-6 relative z-20">
        <h2 className={`${playfair.className} text-4xl md:text-6xl text-gray-100`}>
          Designed for a Seamless Experience
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Closete is designed to make buying and selling luxury effortless 
          — from discovery to delivery.
        </p>
      </div>

      {/* --- PHONE DISPLAY AREA (CAROUSEL) --- */}
      <div className="relative flex items-center justify-center h-[500px] md:h-[650px] w-full">
        {MOCKUP_IMAGES.map((src, index) => {
          const posIndex = (index - activeIndex + 5) % 5;
          const pos = POSITIONS[posIndex];

          return (
            <motion.div
              key={index}
              className="absolute overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#0a0a0a] w-[220px] h-[480px] md:w-[280px] md:h-[600px]"
              initial={false}
              animate={{
                x: `calc(-50% + ${pos.xPx * 0.8}px + ${pos.xVw}vw)`,
                y: "-50%",
                scale: pos.scale,
                zIndex: pos.zIndex,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Smooth premium ease similar to Apple/Hero section
              }}
              style={{
                top: "50%",
                left: "50%",
                border: pos.isCenter ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
                borderTop: pos.isCenter ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent",
                boxShadow: pos.isCenter 
                  ? "0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.15)"
                  : "0 10px 30px rgba(0,0,0,0.8)",
                willChange: "transform, z-index, box-shadow, border",
              }}
            >
              <Image src={src} alt={`App Mockup ${index}`} fill className="object-contain" priority />
            </motion.div>
          );
        })}
      </div>

      {/* --- CONTROLS --- */}
      <div className="flex items-center justify-center gap-6 md:gap-8 mt-8 md:mt-12 relative z-50">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#333] transition-colors"
          aria-label="Previous mockup"
        >
          <ArrowLeft size={24} className="text-white" />
        </button>

        <div className="flex items-center gap-3">
          {MOCKUP_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to mockup ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? "w-2.5 h-2.5 bg-white" 
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#333] transition-colors"
          aria-label="Next mockup"
        >
          <ArrowRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
}
