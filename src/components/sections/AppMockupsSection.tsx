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
  { xPx: 20, xVw: 22.5, scale: 0.8, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
  // 2: Right-2 (Far Right)
  { xPx: 40, xVw: 41.2, scale: 0.65, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
  // 3: Left-2 (Far Left)
  { xPx: -40, xVw: -41.2, scale: 0.65, opacity: 1, zIndex: 25, isCenter: false, overlayOpacity: 0.5 },
  // 4: Left-1
  { xPx: -20, xVw: -22.5, scale: 0.8, opacity: 1, zIndex: 30, isCenter: false, overlayOpacity: 0.2 },
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
      <div className="container mx-auto px-4 lg:px-12">
        {/* --- HEADER --- */}
        <div className="max-w-5xl mx-auto text-center mb-8 space-y-2 md:space-y-6 relative z-20">
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
                boxShadow: pos.isCenter ? "none" : "0 10px 30px rgba(0,0,0,0.8)",
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
              {/* --- GOLDEN BORDER (Active Center) --- */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 notch-main-clip"
                initial={false}
                animate={{ opacity: pos.isCenter ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  padding: "3px",
                  background: "linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              
              {/* Notch Border (Desktop) */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 hidden md:block"
                initial={false}
                animate={{ opacity: pos.isCenter ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "linear-gradient(99.37deg, #AF7413 0%, #C98C28 17%, #E1B744 40%, #FFED81 53%, #E1C24E 67%, #A06008 100%)",
                  WebkitMask: `url("data:image/svg+xml,%3Csvg width='280' height='600' viewBox='0 0 280 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 64 1.5 L 80 1.5 C 85 1.5, 87 2.5, 89 6.5 L 92 15.5 C 94 18.5, 96 20.5, 100 20.5 L 180 20.5 C 184 20.5, 186 18.5, 188 15.5 L 191 6.5 C 193 2.5, 195 1.5, 200 1.5 L 216 1.5' stroke='black' stroke-width='3' fill='none'/%3E%3C/svg%3E")`,
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
                  WebkitMask: `url("data:image/svg+xml,%3Csvg width='220' height='480' viewBox='0 0 220 480' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 49 1.5 L 55 1.5 C 60 1.5, 62 2.5, 64 5.5 L 67 12.5 C 68 15.5, 69 16.5, 73 16.5 L 147 16.5 C 151 16.5, 152 15.5, 153 12.5 L 156 5.5 C 158 2.5, 160 1.5, 165 1.5 L 171 1.5' stroke='black' stroke-width='3' fill='none'/%3E%3C/svg%3E")`,
                }}
              />

              {/* --- GREY BORDER 1PX (Inactive Sides) --- */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 notch-main-clip"
                initial={false}
                animate={{ opacity: pos.isCenter ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  padding: "1px",
                  background: "rgba(255,255,255,0.2)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              {/* Grey Notch Border (Desktop) */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 hidden md:block"
                initial={false}
                animate={{ opacity: pos.isCenter ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  WebkitMask: `url("data:image/svg+xml,%3Csvg width='280' height='600' viewBox='0 0 280 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 64 0.5 L 80 0.5 C 85 0.5, 87 1.5, 89 5.5 L 92 14.5 C 94 17.5, 96 19.5, 100 19.5 L 180 19.5 C 184 19.5, 186 17.5, 188 14.5 L 191 5.5 C 193 1.5, 195 0.5, 200 0.5 L 216 0.5' stroke='black' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Grey Notch Border (Mobile) */}
              <motion.div 
                className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 block md:hidden"
                initial={false}
                animate={{ opacity: pos.isCenter ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  WebkitMask: `url("data:image/svg+xml,%3Csvg width='220' height='480' viewBox='0 0 220 480' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 49 0.5 L 55 0.5 C 60 0.5, 62 1.5, 64 4.5 L 67 11.5 C 68 14.5, 69 15.5, 73 15.5 L 147 15.5 C 151 15.5, 152 14.5, 153 11.5 L 156 4.5 C 158 1.5, 160 0.5, 165 0.5 L 171 0.5' stroke='black' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Notch Fill (Desktop) */}
              <svg width="150" height="24" viewBox="0 0 150 24" fill="none" overflow="visible" className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:block z-20 pointer-events-none">
                <path d="M -1 1.5 L 15 1.5 C 20 1.5, 22 2.5, 24 6.5 L 27 15.5 C 29 18.5, 31 20.5, 35 20.5 L 115 20.5 C 119 20.5, 121 18.5, 123 15.5 L 126 6.5 C 128 2.5, 130 1.5, 135 1.5 L 151 1.5 L 151 -10 L -1 -10 Z" fill="#0a0a0a" />
              </svg>
              
              {/* Notch Fill (Mobile) */}
              <svg width="120" height="20" viewBox="0 0 120 20" fill="none" overflow="visible" className="absolute top-0 left-1/2 -translate-x-1/2 block md:hidden z-20 pointer-events-none">
                <path d="M -1 1.5 L 5 1.5 C 10 1.5, 12 2.5, 14 5.5 L 17 12.5 C 18 15.5, 19 16.5, 23 16.5 L 97 16.5 C 101 16.5, 102 15.5, 103 12.5 L 106 5.5 C 108 2.5, 110 1.5, 115 1.5 L 121 1.5 L 121 -10 L -1 -10 Z" fill="#0a0a0a" />
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
      </div>
    </section>
  );
}
