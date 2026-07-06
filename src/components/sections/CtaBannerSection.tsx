"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const luxuryPatternSvg = `<svg width="500" height="250" xmlns="http://www.w3.org/2000/svg">
  <style>
    .brand-text {
      font-family: 'Times New Roman', serif;
      font-size: 24px;
      letter-spacing: 4px;
      fill: rgba(0, 0, 0, 0.22);
      text-transform: uppercase;
    }
  </style>
  <g transform="rotate(-20, 250, 125)">
    <text x="50" y="80" class="brand-text">Louis Vuitton</text>
    <text x="340" y="80" class="brand-text">Gucci</text>
    <text x="-50" y="200" class="brand-text">Prada</text>
    <text x="160" y="200" class="brand-text">Chanel</text>
    <text x="380" y="200" class="brand-text">Dior</text>
  </g>
</svg>`;

const noiseSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
</svg>`;

export function CtaBannerSection() {
  return (
    <section className={`py-12 md:py-24 relative flex justify-center px-4 md:px-8 ${dmSans.className} overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1250px] h-[480px] md:h-[500px] rounded-[30px] md:rounded-[40px] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center text-[#111] group cursor-default"
        style={{ background: 'linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)' }}
      >
        
        {/* Luxury Watermark Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-90"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(luxuryPatternSvg)}")`,
            backgroundSize: "450px 225px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />
        
        {/* Animated Metallic Sheen (Shimmer) */}
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 2 }}
          className="absolute top-0 bottom-0 w-[150%] pointer-events-none z-0"
          style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)' }}
        />

        {/* Film Grain / Matte Texture to give the gold physical realism */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.15] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg)}")`,
          }}
        />

        {/* Inner Jewel Border for that 'crafted' premium feel */}
        <div className="absolute inset-[1px] md:inset-[2px] rounded-[28px] md:rounded-[38px] border border-white/40 pointer-events-none z-10 mix-blend-overlay" />

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
            {/* Icon */}
            <div className="w-28 h-28 mb-6 rounded-full border-[1px] border-black/10 flex items-center justify-center relative">
               <div className="absolute inset-1.5 rounded-full border-[1px] border-black/10" />
               <div className="w-20 h-20 rounded-full shadow-xl relative z-10 overflow-hidden">
                  <Image src="/Group 1707483229.png" alt="CTA Icon" fill className="object-contain" />
               </div>
            </div>

            <h2 className={`${playfair.className} text-3xl md:text-[40px] lg:text-[48px] font-semibold mb-4 tracking-tight leading-[1.1] text-[#111] md:whitespace-nowrap`} style={{ textShadow: "0 2px 10px rgba(255,255,255,0.4)" }}>
               Start Buying & Selling with Confidence
            </h2>
            
            <p className="text-[#1a1a1a]/85 text-[15px] md:text-[17px] font-medium mb-10 max-w-[600px] mx-auto leading-relaxed">
               Join Closete and experience a more secure and refined way to trade luxury fashion – starting in Dubai.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-20">
               {/* Apple Store Button */}
               <button className="flex items-center gap-3 bg-[#0a0a0a] text-white px-5 py-3 rounded-xl hover:bg-black transition-transform hover:scale-105 w-[200px] justify-center shadow-xl">
                 <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                   <path d="M16 11.5c-.1-2.4 1.9-3.9 1.9-3.9-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.6 1.3 10.2.8 1.2 1.8 2.5 3.1 2.5 1.3 0 1.7-.8 3.2-.8 1.5 0 2 .8 3.3.8 1.3 0 2.2-1.2 3-2.4.9-1.3 1.3-2.6 1.3-2.6-.1-.1-2.4-1-2.3-4.5zM14.6 4.6c.7-.9 1.2-2.1 1-3.3-1.1.1-2.3.7-3 1.5-.6.7-1.2 1.9-1 3.1 1.2.1 2.3-.5 3-1.3z"/>
                 </svg>
                 <div className="text-left flex flex-col">
                   <span className="text-[10px] leading-[1] text-gray-300">Download on the</span>
                   <span className="text-[15px] font-semibold leading-tight">App Store</span>
                 </div>
               </button>

               {/* Google Play Button */}
               <button className="flex items-center gap-3 bg-[#0a0a0a] text-white px-5 py-3 rounded-xl hover:bg-black transition-transform hover:scale-105 w-[200px] justify-center shadow-xl">
                 <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M2.5 1.5C2 2 1.5 3 1.5 4.5v15c0 1.5.5 2.5 1 3L13 12 2.5 1.5z" fill="#00E676"/>
                   <path d="M18 17l-5-5-10.5 10.5C3.5 23 4.5 23 5 22.5L18 17z" fill="#FF3D00"/>
                   <path d="M18 7L5 1.5C4.5 1 3.5 1 2.5 1.5L13 12 18 7z" fill="#00B0FF"/>
                   <path d="M22 10.5L18 7l-5 5 5 5 4-3.5c1-1 1-2 0-3z" fill="#FFC400"/>
                 </svg>
                 <div className="text-left flex flex-col">
                   <span className="text-[10px] leading-[1] text-gray-300">GET IT ON</span>
                   <span className="text-[15px] font-semibold leading-tight">Google Play</span>
                 </div>
               </button>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
