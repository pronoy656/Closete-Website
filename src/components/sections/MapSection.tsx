"use client";

import Image from "next/image";

export function MapSection() {
  return (
    <section className="pt-[70px] lg:pt-40 pb-0 lg:pb-10 bg-transparent relative z-10 w-full flex justify-center">
      <div className="container mx-auto px-4 lg:px-12 relative">
        {/* Desktop Image */}
        <Image
          src="/map.png"
          alt="Where we Operate"
          width={1632}
          height={964}
          className="hidden md:block w-full h-auto object-contain"
          priority
        />
        
        {/* Mobile Image */}
        <Image
          src="/where-we-operate-mobile.png"
          alt="Where we Operate (Mobile)"
          width={1412}
          height={1960}
          className="block md:hidden w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
