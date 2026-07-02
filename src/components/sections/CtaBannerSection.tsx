"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="py-24 relative overflow-hidden flex flex-col items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl rounded-[40px] bg-gradient-gold p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.4)]"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="flex-1 relative z-10 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-[#0f0f0f] text-gold-400 flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl">
            <Download size={28} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f0f0f] font-bold mb-4">
            Start Buying & Selling with Confidence
          </h2>
          <p className="text-[#0f0f0f]/80 text-lg mb-8 max-w-lg mx-auto md:mx-0 font-medium">
            Join the Closeté community today and experience the future of luxury resale.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="px-6 py-3 rounded-xl bg-[#0f0f0f] text-white flex items-center gap-3 transition-transform hover:scale-105">
              {/* Apple Logo placeholder */}
              <div className="w-6 h-6 bg-white rounded-full" />
              <div className="text-left">
                <div className="text-[10px] text-white/70 leading-none">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </button>
            <button className="px-6 py-3 rounded-xl bg-[#0f0f0f] text-white flex items-center gap-3 transition-transform hover:scale-105">
              {/* Play Store Logo placeholder */}
              <div className="w-6 h-6 bg-white/50 rounded" />
              <div className="text-left">
                <div className="text-[10px] text-white/70 leading-none">GET IT ON</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Mockup in banner */}
        <div className="hidden lg:block relative z-10 w-64 h-[400px] -my-24">
          <div className="w-full h-full bg-[#0f0f0f] border-[6px] border-[#222] rounded-[40px] shadow-2xl overflow-hidden relative rotate-12 origin-bottom-right">
             <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#1a1a1a] to-transparent" />
             <div className="absolute bottom-6 left-6 right-6 h-12 bg-gold-500 rounded-xl" />
          </div>
        </div>

      </motion.div>
    </section>
  );
}
