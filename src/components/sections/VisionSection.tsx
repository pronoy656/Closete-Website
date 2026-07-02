"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden flex flex-col items-center border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif mb-4 text-center text-white"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#f2f2f2]/70 text-center mb-24 max-w-lg"
        >
          Learn our vision, why we created this, and our mission in the luxury secondary market.
        </motion.p>
        
        <div className="relative max-w-4xl text-center">
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-16 -left-12 w-20 h-20 rounded-xl bg-gradient-gold p-1 shadow-2xl rotate-[-12deg]"
          >
            <div className="w-full h-full bg-[#1a1a1a] rounded-lg overflow-hidden flex items-center justify-center">
               <div className="w-8 h-8 rounded-full bg-gold-400" />
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-8 w-24 h-16 rounded-xl bg-white/10 p-1 shadow-2xl rotate-[10deg] backdrop-blur-sm border border-white/20"
          >
            <div className="w-full h-full bg-[#1a1a1a] rounded-lg overflow-hidden" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider leading-relaxed text-white"
          >
            WE BELIEVE BUYING AND SELLING HIGH-VALUE ITEMS SHOULD <span className="text-gold-400">FEEL SEAMLESS, SECURE, AND PREMIUM AT EVERY STEP.</span>
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
