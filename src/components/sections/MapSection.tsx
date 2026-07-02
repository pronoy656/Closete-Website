"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section id="platform" className="py-24 relative overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-4 text-center"
        >
          Where we Operate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#f2f2f2]/70 text-center max-w-2xl mb-16"
        >
          Discover where Closeté brings the world of luxury right to your doorstep. From local gems to international treasures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full max-w-5xl bg-[#151515] rounded-3xl border border-white/5 p-8 relative shadow-2xl"
        >
          {/* Mock Map using SVG/CSS shapes or image placeholder */}
          <div className="w-full aspect-video bg-[#0f0f0f] rounded-2xl relative overflow-hidden border border-white/5 flex items-center justify-center">
            {/* Very simple dot map placeholder */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(#f2f2f2 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
            
            {/* Pin for UAE */}
            <div className="absolute top-[45%] left-[60%] flex flex-col items-center">
              <div className="bg-gradient-gold text-[#0f0f0f] text-xs font-bold px-3 py-1 rounded-full mb-2 whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                UAE, Dubai
              </div>
              <div className="relative">
                <MapPin className="text-gold-400" size={32} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full mt-[-2px]" />
                <div className="absolute -inset-4 bg-gold-400/20 rounded-full blur-md animate-pulse -z-10" />
              </div>
            </div>
            
            <div className="absolute bottom-6 w-full text-center text-[#f2f2f2]/50 text-sm">
              <p>WE ARE PROUD TO OFFER OUR PREMIUM SERVICES TO LUXURY</p>
              <p>LOVERS ACROSS THE UAE WITH DELIVERY TO YOUR DOOORSTEP.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
