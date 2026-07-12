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
  { xPx: 0, xVw: 0, scale: 1, opacity: 1, zIndex: 40, isCenter: true, overlayOpacity: 0 },
  // 1: Right-1
  { xPx: 40, xVw: 12, scale: 0.75, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
  // 2: Right-2 (Far Right)
  { xPx: 75, xVw: 21, scale: 0.55, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
  // 3: Left-2 (Far Left)
  { xPx: -75, xVw: -21, scale: 0.55, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
  // 4: Left-1
  { xPx: -40, xVw: -12, scale: 0.75, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
];

const MOCKUP_IMAGES = [
  "/Home.png", // Initially Center
  "/Product Vie.png", // Initially Right-1
  "/Payment.png", // Initially Far Right
  "/Review Listing.png", // Initially Far Left
  "/Order Confirmation.png", // Initially Left-1
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
    const getIntervalTime = () => window.innerWidth < 768 ? 3500 : 1500;
    
    let interval = setInterval(() => {
      handleNext();
    }, getIntervalTime()); 

    const handleResize = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        handleNext();
      }, getIntervalTime());
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleNext]);

  return (
    <section id="app-preview" className={`bg-[#0a0a0a] pt-[70px] lg:pt-30 pb-0 lg:pb-12 overflow-hidden text-white ${dmSans.className}`}>
      <style>{`
        .notch-main-clip {
          clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, calc(50% + 60px) 0%, calc(50% + 60px) 30px, calc(50% - 60px) 30px, calc(50% - 60px) 0%);
        }
        @media (min-width: 768px) {
          .notch-main-clip {
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, calc(50% + 75px) 0%, calc(50% + 75px) 35px, calc(50% - 75px) 35px, calc(50% - 75px) 0%);
          }
        }
      `}</style>
      {/* --- HEADER --- */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-8 space-y-2 md:space-y-6 relative z-20">
        <h2 className={`${playfair.className} text-[32px] md:text-6xl text-gray-100`}>
          Designed for a Seamless Experience
        </h2>
        <p style={{ color: "rgba(242,242,242,0.75)", wordSpacing: "1px" }} className="text-[14px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
          Closete is designed to make buying and selling luxury effortless 
          — from discovery to delivery.
        </p>
      </div>

      {/* --- PHONE DISPLAY AREA (CAROUSEL) --- */}
      <div className="relative flex items-center justify-center h-[500px] md:h-[650px] w-full">
        {MOCKUP_IMAGES.map((src, index) => {
          const posIndex = (index - activeIndex + 5) % 5;
          const pos = POSITIONS[posIndex];
          
          const getClamp = (vw: number) => {
            const maxPx = vw * 12.5; // based on 1250px container
            const minBound = Math.min(0, maxPx);
            const maxBound = Math.max(0, maxPx);
            return `clamp(${minBound}px, ${vw}vw, ${maxBound}px)`;
          };

          return (
            <motion.div
              key={index}
              className="absolute overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#0a0a0a] w-[220px] h-[480px] md:w-[280px] md:h-[600px]"
              initial={false}
              animate={{
                x: `calc(-50% + ${pos.xPx}px + ${getClamp(pos.xVw)})`,
                y: "-50%",
                scale: pos.scale,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
                boxShadow: pos.isCenter 
                  ? "0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.15)"
                  : "0 10px 30px rgba(0,0,0,0.8)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Smooth premium ease similar to Apple/Hero section
              }}
              style={{
                top: "50%",
                left: "50%",
                willChange: "transform, opacity, z-index, box-shadow",
              }}
            >
              {/* The Border */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 notch-main-clip"
                initial={false}
                animate={{ opacity: pos.isCenter ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  padding: "2px",
                  background: "linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              
              {/* Notch Border (Desktop) - uses identical background to guarantee seamless gradient match */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 hidden md:block"
                initial={false}
                animate={{ opacity: pos.isCenter ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%)",
                  WebkitMask: `url("data:image/svg+xml,%3Csvg width='280' height='600' viewBox='0 0 280 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 64 1 L 80 1 C 85 1, 87 2, 89 6 L 92 15 C 94 18, 96 20, 100 20 L 180 20 C 184 20, 186 18, 188 15 L 191 6 C 193 2, 195 1, 200 1 L 216 1' stroke='black' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Notch Border (Mobile) */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 block md:hidden"
                initial={false}
                animate={{ opacity: pos.isCenter ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%)",
                  WebkitMask: `url("data:image/svg+xml,%3Csvg width='220' height='480' viewBox='0 0 220 480' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 49 1 L 55 1 C 60 1, 62 2, 64 5 L 67 12 C 68 15, 69 16, 73 16 L 147 16 C 151 16, 152 15, 153 12 L 156 5 C 158 2, 160 1, 165 1 L 171 1' stroke='black' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Notch Fill (Desktop) */}
              <svg width="150" height="24" viewBox="0 0 150 24" fill="none" overflow="visible" className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:block z-20 pointer-events-none">
                <path d="M -1 1 L 15 1 C 20 1, 22 2, 24 6 L 27 15 C 29 18, 31 20, 35 20 L 115 20 C 119 20, 121 18, 123 15 L 126 6 C 128 2, 130 1, 135 1 L 151 1 L 151 -10 L -1 -10 Z" fill="#0a0a0a" />
              </svg>
              
              {/* Notch Fill (Mobile) */}
              <svg width="120" height="20" viewBox="0 0 120 20" fill="none" overflow="visible" className="absolute top-0 left-1/2 -translate-x-1/2 block md:hidden z-20 pointer-events-none">
                <path d="M -1 1 L 5 1 C 10 1, 12 2, 14 5 L 17 12 C 18 15, 19 16, 23 16 L 97 16 C 101 16, 102 15, 103 12 L 106 5 C 108 2, 110 1, 115 1 L 121 1 L 121 -10 L -1 -10 Z" fill="#0a0a0a" />
              </svg>

              <Image src={src} alt={`App Mockup ${index}`} fill className="object-cover z-0" priority />
              
              {/* Gradient Overlay for unfocused mockups */}
              <motion.div 
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)"
                }}
                animate={{ opacity: pos.overlayOpacity }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* --- CONTROLS --- */}
      <div className="flex items-center justify-center gap-6 md:gap-8 mt-[20px] md:mt-12 relative z-40">
        <button 
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-[#1a1a1a] flex md:hidden items-center justify-center hover:bg-[#333] transition-colors"
          aria-label="Previous mockup"
        >
          <ArrowLeft size={20} className="text-white" />
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
          className="w-11 h-11 rounded-full bg-[#1a1a1a] flex md:hidden items-center justify-center hover:bg-[#333] transition-colors"
          aria-label="Next mockup"
        >
          <ArrowRight size={20} className="text-white" />
        </button>
      </div>
    </section>
  );
}
