"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export function CtaBannerSection() {
  return (
    <section className={`py-12 md:py-24 relative flex justify-center px-4 md:px-8 ${dmSans.className} overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1250px] h-[480px] md:h-[500px] rounded-[30px] md:rounded-[40px] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center text-[#111]"
        style={{ background: 'radial-gradient(circle at center, #FDE694 0%, #D49D26 60%, #A67013 100%)' }}
      >
        
        {/* Left Phone Mockup (Cut off at edge) */}
        <div className="absolute top-8 -left-20 md:-left-12 w-[260px] h-[550px] bg-[#111] rounded-[35px] border-[6px] border-[#222] shadow-[20px_0_40px_rgba(0,0,0,0.3)] flex-col overflow-hidden text-white hidden md:flex scale-90 md:scale-100 origin-top-left">
            {/* Top of phone */}
            <div className="relative h-44 w-full">
               <Image src="/luxury-handbag-1.jpg" alt="Bag" fill className="object-cover" />
               <div className="absolute top-4 left-4 bg-white text-black px-2 py-0.5 rounded text-[10px] font-bold">AED 3,200</div>
            </div>
            <div className="p-4 flex flex-col gap-2 bg-[#1a1a1a] flex-1">
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-5 h-5 rounded-full bg-gray-500 overflow-hidden relative">
                   <Image src="/luxury-watch.jpg" alt="user" fill className="object-cover" />
                 </div>
                 <span className="text-[10px] font-medium text-gray-300">Olivia Mendes <span className="text-blue-500">✔</span></span>
               </div>
               <h3 className="font-bold text-[13px]">Classic Flap Bag</h3>
               <p className="text-[8px] text-gray-400">Excellent condition • Worn Twice • Medium - 25cm</p>
               
               <div className="mt-3 text-[8px] text-gray-500 leading-tight">
                 <span className="font-bold text-gray-400 mb-1 block uppercase">Description</span>
                 Black caviar leather with gold hardware. Comes with original dust bag and authenticity card.
               </div>

               <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                  <div className="flex flex-col items-center gap-1.5"><div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-gray-400 rounded-full"/></div><span className="text-[7px] text-gray-400">Authenticity</span></div>
                  <div className="flex flex-col items-center gap-1.5"><div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-gray-400 rounded-full"/></div><span className="text-[7px] text-gray-400">Payment</span></div>
                  <div className="flex flex-col items-center gap-1.5"><div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-gray-400 rounded-full"/></div><span className="text-[7px] text-gray-400">Secure</span></div>
               </div>
               
               <div className="w-full h-9 bg-gradient-to-r from-[#d4af37] to-[#A87C36] rounded-full mt-4 flex items-center justify-center text-black text-[11px] font-bold shadow-lg">
                  Secure This Item →
               </div>
            </div>
        </div>

        {/* Right Phone Mockup (Cut off at edge) */}
        <div className="absolute -bottom-20 -right-20 md:-right-12 w-[260px] h-[550px] bg-[#1a1a1a] rounded-[35px] border-[6px] border-[#222] shadow-[-20px_0_40px_rgba(0,0,0,0.3)] flex-col overflow-hidden text-white hidden md:flex scale-90 md:scale-100 origin-bottom-right">
            {/* Header */}
            <div className="flex items-center justify-between p-4 mt-4">
               <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center"><span className="text-gray-400 text-sm">{"<"}</span></div>
               <span className="text-xs font-semibold">Item Detail</span>
               <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center"><span className="text-gray-400 text-xs">🗑</span></div>
            </div>
            <div className="px-4 pb-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden relative shadow-inner">
                   <Image src="/luxury-tote-bag.webp" alt="Tote" fill className="object-cover" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                      </div>
                   </div>
                </div>
                
                <div className="flex justify-between items-end mt-4">
                  <h3 className="font-bold text-[13px]">Classic Flap Bag</h3>
                  <span className="text-[8px] bg-white/10 px-2 py-1 rounded text-gray-300">Not reserved yet</span>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                   <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2 block">Item Details</span>
                   <p className="text-[10px] text-gray-400 py-1.5 border-b border-white/5 flex justify-between">Brand <span className="text-white font-medium">Chanel</span></p>
                   <p className="text-[10px] text-gray-400 py-1.5 border-b border-white/5 flex justify-between">Condition <span className="text-white font-medium">Excellent</span></p>
                   <p className="text-[10px] text-gray-400 py-1.5 border-b border-white/5 flex justify-between">Color <span className="text-white font-medium">Beige</span></p>
                </div>
            </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
            {/* Icon */}
            <div className="w-24 h-24 mb-6 rounded-full border-[1px] border-black/10 flex items-center justify-center relative">
               <div className="absolute inset-1.5 rounded-full border-[1px] border-black/10" />
               <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center shadow-xl relative z-10">
                  <div className="w-[26px] h-[26px] bg-white rounded-[7px] flex items-center justify-center relative shadow-inner">
                     <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="w-[14px] h-[14px] text-[#111]">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                     </svg>
                     <div className="absolute -bottom-1 -right-1.5 text-white text-[12px] drop-shadow-md">✨</div>
                  </div>
               </div>
            </div>

            <h2 className={`${playfair.className} text-4xl md:text-[54px] font-bold mb-4 tracking-tight leading-[1.1] text-[#0a0a0a]`}>
               Start Buying & Selling with Confidence
            </h2>
            
            <p className="text-[#0a0a0a]/80 text-[15px] md:text-[17px] font-medium mb-10 max-w-[600px] mx-auto leading-relaxed">
               Join Closete and experience a more secure and refined way to trade luxury fashion – starting in Dubai.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
               {/* Apple Store Button */}
               <button className="flex items-center gap-3 bg-[#111] text-white px-5 py-3 rounded-xl hover:bg-black transition-transform hover:scale-105 w-[200px] justify-center shadow-xl">
                 <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                   <path d="M16 11.5c-.1-2.4 1.9-3.9 1.9-3.9-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.6 1.3 10.2.8 1.2 1.8 2.5 3.1 2.5 1.3 0 1.7-.8 3.2-.8 1.5 0 2 .8 3.3.8 1.3 0 2.2-1.2 3-2.4.9-1.3 1.3-2.6 1.3-2.6-.1-.1-2.4-1-2.3-4.5zM14.6 4.6c.7-.9 1.2-2.1 1-3.3-1.1.1-2.3.7-3 1.5-.6.7-1.2 1.9-1 3.1 1.2.1 2.3-.5 3-1.3z"/>
                 </svg>
                 <div className="text-left flex flex-col">
                   <span className="text-[10px] leading-[1] text-gray-300">Download on the</span>
                   <span className="text-[15px] font-semibold leading-tight">App Store</span>
                 </div>
               </button>

               {/* Google Play Button */}
               <button className="flex items-center gap-3 bg-[#111] text-white px-5 py-3 rounded-xl hover:bg-black transition-transform hover:scale-105 w-[200px] justify-center shadow-xl">
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
