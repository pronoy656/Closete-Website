"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function CtaBannerSection() {
  return (
    <section className="pt-[70px] pb-12 md:py-24 relative flex justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 300px 0px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center bg-[#0a0a0a]"
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
        </motion.div>
      </div>
    </section>
  );
}
