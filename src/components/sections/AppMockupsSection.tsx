"use client";

import { motion } from "framer-motion";

export function AppMockupsSection() {
  return (
    <section className="py-24 relative overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-4 text-center max-w-2xl"
        >
          Designed For a Seamless Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#f2f2f2]/70 text-center mb-20"
        >
          Explore a sleek, intuitive app design crafted for luxury shopping.
        </motion.p>
        
        {/* Mockups Container */}
        <div className="relative w-full max-w-5xl h-[600px] flex justify-center items-center">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Phone 1 (Far Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 0.4, x: -350, rotate: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 w-64 h-[500px] bg-[#0f0f0f] border-4 border-white/10 rounded-[40px] shadow-2xl overflow-hidden scale-75"
          >
            <div className="w-full h-full bg-[#151515]" />
          </motion.div>

          {/* Phone 2 (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 0.8, x: -180, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute z-20 w-72 h-[550px] bg-[#0f0f0f] border-[6px] border-[#222] rounded-[45px] shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden scale-90"
          >
            <div className="w-full h-full bg-[#111] p-4 flex flex-col gap-4">
               {/* Dummy UI */}
               <div className="w-full h-48 bg-neutral-800 rounded-2xl" />
               <div className="w-3/4 h-6 bg-neutral-800 rounded" />
               <div className="w-1/2 h-4 bg-neutral-800 rounded" />
               <div className="w-full h-12 bg-neutral-800 rounded-xl mt-4" />
            </div>
          </motion.div>

          {/* Phone 3 (Center - Main) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-30 w-[320px] h-[650px] bg-[#0f0f0f] border-[8px] border-gold-500/40 rounded-[50px] shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden scale-100 flex flex-col relative"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-40" />
            
            <div className="w-full flex-1 bg-[#151515] p-5 flex flex-col">
              <div className="flex justify-between items-center mb-6 mt-4">
                <div className="text-xl font-serif text-gold-400">Closeté</div>
              </div>
              <div className="w-full h-64 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl mb-6 relative border border-white/5 shadow-inner" />
              <div className="w-2/3 h-6 bg-neutral-700 rounded-md mb-2" />
              <div className="w-1/3 h-4 bg-neutral-800 rounded-md mb-8" />
              <div className="w-full h-14 bg-gradient-gold rounded-2xl mt-auto" />
            </div>
          </motion.div>

          {/* Phone 4 (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 0.8, x: 180, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute z-20 w-72 h-[550px] bg-[#0f0f0f] border-[6px] border-[#222] rounded-[45px] shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden scale-90"
          >
            <div className="w-full h-full bg-[#111] p-4 flex flex-col gap-4">
               <div className="w-full h-48 bg-neutral-800 rounded-2xl" />
               <div className="w-3/4 h-6 bg-neutral-800 rounded" />
               <div className="w-1/2 h-4 bg-neutral-800 rounded" />
               <div className="w-full h-12 bg-neutral-800 rounded-xl mt-4" />
            </div>
          </motion.div>

          {/* Phone 5 (Far Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 0.4, x: 350, rotate: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 w-64 h-[500px] bg-[#0f0f0f] border-4 border-white/10 rounded-[40px] shadow-2xl overflow-hidden scale-75"
          >
            <div className="w-full h-full bg-[#151515]" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
