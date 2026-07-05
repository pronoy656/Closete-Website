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
        style={{ background: 'linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)' }}
      >
        
        {/* Left Phone Mockup (Raw Image) */}
        <div className="absolute -top-16 -left-10 md:-left-4 lg:-left-2 xl:left-4 w-[200px] h-[430px] hidden md:block origin-top-left">
            <Image src="/Product View.png" alt="Product View" fill className="object-contain" />
            {/* Golden gradient overlay masked to the exact image shape */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                background: 'linear-gradient(to top, rgba(175,116,19, 0.85) 0%, rgba(226,183,68, 0.5) 50%, rgba(255,237,129, 0.25) 100%)',
                WebkitMaskImage: 'url("/Product View.png")',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center'
              }} 
            />
        </div>

        {/* Right Phone Mockup (Raw Image) */}
        <div className="absolute -bottom-20 -right-10 md:-right-4 lg:-right-2 xl:right-4 w-[200px] h-[430px] hidden md:block origin-bottom-right">
            <Image src="/Whne item is not reserved.png" alt="Item Not Reserved" fill className="object-contain" />
            {/* Golden gradient overlay masked to the exact image shape */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                background: 'linear-gradient(to top, rgba(175,116,19, 0.85) 0%, rgba(226,183,68, 0.5) 50%, rgba(255,237,129, 0.25) 100%)',
                WebkitMaskImage: 'url("/Whne item is not reserved.png")',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center'
              }} 
            />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
            {/* Icon */}
            <div className="w-28 h-28 mb-6 rounded-full border-[1px] border-black/10 flex items-center justify-center relative">
               <div className="absolute inset-1.5 rounded-full border-[1px] border-black/10" />
               <div className="w-20 h-20 rounded-full shadow-xl relative z-10 overflow-hidden">
                  <Image src="/Group 1707483229.png" alt="CTA Icon" fill className="object-contain" />
               </div>
            </div>

            <h2 className={`${playfair.className} text-3xl md:text-[40px] lg:text-[48px] font-medium mb-4 tracking-tight leading-[1.1] text-[#0a0a0a] md:whitespace-nowrap`}>
               Start Buying & Selling with Confidence
            </h2>
            
            <p className="text-[#0a0a0a]/80 text-[15px] md:text-[17px] font-normal mb-10 max-w-[600px] mx-auto leading-relaxed">
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
