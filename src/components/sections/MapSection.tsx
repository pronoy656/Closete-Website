"use client";

import Image from "next/image";

export function MapSection() {
  return (
    <section className="pt-[70px] lg:pt-40 pb-0 lg:pb-10 px-6 lg:px-12 bg-transparent relative z-10 w-full flex justify-center">
      <div 
        className="max-w-7xl w-full p-4 lg:p-8 flex flex-col items-center text-center relative overflow-hidden rounded-[2.5rem]"
        style={{ background: "linear-gradient(270.21deg, #2B2D32 -23.83%, #1C1D20 92.92%)" }}
      >

        {/* Headings */}
        <h2 className="text-[26px] lg:text-[2.75rem] font-serif text-[#f2f2f2] tracking-tight mb-2 mt-2">
          Where we Operate
        </h2>
        <p className="text-[#a1a1aa] max-w-2xl text-[14px] lg:text-[15px] leading-relaxed mb-6">
          Closete is currently operating in Dubai, with expansion across the UAE<br className="hidden md:block" /> planned in the coming months.
        </p>

        {/* Map Graphic */}
        <div className="relative w-full aspect-[2/1] md:aspect-[2.8/1] overflow-hidden mb-4 rounded-2xl flex items-center justify-center">
          <Image
            src="/map-1.png"
            alt="World Map showing UAE"
            fill
            className="object-cover object-center scale-[1.15]"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Positioning wrapper: shifts center roughly to UAE on a standard world map */}
            <div className="relative left-[12%] sm:left-[9%] top-[-9%] flex flex-col items-center">
              
              {/* Dubai Tooltip */}
              <div className="absolute -top-[40px] md:-top-[70px] bg-[#F6AD31] text-black font-bold px-2.5 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl text-[13px] md:text-lg flex items-center gap-2 md:gap-2.5 shadow-xl whitespace-nowrap z-20 leading-tight">
                <div className="relative flex items-center justify-center rounded-full bg-black/30 p-[2px]">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black rounded-full" />
                </div>
                Dubai
                <div className="absolute -bottom-1 md:-bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#F6AD31] rotate-45 rounded-sm" />
              </div>

              {/* Premium SVG Pin */}
              <div className="relative z-10 flex flex-col items-center drop-shadow-[0_12px_15px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-300">
                <svg className="w-[24px] h-[32px] md:w-[40px] md:h-[54px]" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.373 18.627 0 12 0Z" fill="url(#premiumPinGrad)"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 19.5 12 29 12 29C12 29 22 19.5 22 12C22 6.477 17.523 2 12 2Z" fill="url(#premiumPinInnerGrad)"/>
                  <circle cx="12" cy="12" r="5" fill="#1C1D20" />
                  <defs>
                    <linearGradient id="premiumPinGrad" x1="0" y1="0" x2="24" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff7b7b"/>
                      <stop offset="0.5" stopColor="#d82020"/>
                      <stop offset="1" stopColor="#8b0000"/>
                    </linearGradient>
                    <linearGradient id="premiumPinInnerGrad" x1="2" y1="2" x2="22" y2="29" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ffa0a0"/>
                      <stop offset="0.5" stopColor="#d82020"/>
                      <stop offset="1" stopColor="#6a0000"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Dashed curved line and Launching Soon box */}
              <div className="absolute -top-2 md:top-6 right-[50%] w-[80px] sm:w-[250px] md:w-[220px] h-[55px] sm:h-[155px] pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                  {/* Start at pin base (300, 20), arc up to (150, -30), end at (0, 60) */}
                  <path 
                    d="M 300 20 Q 150 -30 0 60" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.25" 
                    strokeDasharray="6 6" 
                    className="opacity-90"
                  />
                  
                  {/* Animated Arrow following the path */}
                  <path d="M -6 -4 L 4 0 L -6 4 L -3 0 Z" fill="#F6AD31">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 300 20 Q 150 -30 0 60" rotate="auto" />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.5s" repeatCount="indefinite" />
                  </path>
                  
                  <circle cx="0" cy="60" r="4" fill="white" />
                </svg>
                {/* Launching Soon Label */}
                <div className="absolute top-[35px] sm:top-[62px] left-[0px] sm:left-[8px] -translate-x-1/2 sm:-translate-x-[80%] border border-[#F6AD31] bg-[#F6AD31]/10 backdrop-blur-sm text-[#F6AD31] px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-base rounded-md sm:rounded-lg font-medium shadow-lg text-center sm:text-left leading-tight whitespace-normal sm:whitespace-nowrap">
                  Launching <br className="block sm:hidden" />
                  Soon in UAE
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-[14px] md:text-base text-[#a1a1aa] max-w-[574px] mx-auto leading-[1.8] uppercase tracking-[0.08em] mb-4 text-center">
          <span className="block md:hidden">
            We are building towards <span className="text-[#f2f2f2] font-medium">a global</span> <br />
            <span className="text-[#f2f2f2] font-medium">marketplace</span> for luxury resale &ndash; <br />
            starting with a highly controlled, <br />
            trusted local experience.
          </span>
          <span className="hidden md:block">
            We are building towards <span className="text-[#f2f2f2] font-medium">a global marketplace</span> for <br />
            luxury resale &ndash; starting with a highly controlled, trusted local experience.
          </span>
        </p>
      </div>
    </section>
  );
}
