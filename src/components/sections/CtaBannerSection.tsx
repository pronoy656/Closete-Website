"use client";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export function CtaBannerSection() {
  const { ref, isIntersecting } = useInView({ triggerOnce: true });

  return (
    <section className="pt-[70px] pb-12 md:py-24 relative flex justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 w-full">
        <div
          ref={ref}
          className={`w-full relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center bg-[#0a0a0a] reveal reveal-up ${isIntersecting ? 'is-visible' : ''}`}
          style={{ transitionDuration: '0.8s' }}
        >
        <Image 
          src="/Group 1707483234 (1).png" 
          alt="Call to Action Desktop" 
          width={1250}
          height={500}
          className="hidden md:block w-full h-auto object-cover" 
        />
        {/* Mobile/Responsive Image */}
        <Image 
          src="/Group 1707483252.png" 
          alt="Call to Action Mobile" 
          width={800}
          height={800}
          className="block md:hidden w-full h-auto object-cover" 
        />
        </div>
      </div>
    </section>
  );
}
