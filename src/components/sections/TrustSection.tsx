"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Award, Gem } from "lucide-react";

export function TrustSection() {
  const cards = [
    {
      icon: <ShieldCheck size={28} className="mb-4 text-white" />,
      title: "AUTHENTICATION GUARANTEE",
      desc: "Every item is rigorously authenticated before it reaches you.",
      isGold: false
    },
    {
      icon: <CreditCard size={28} className="mb-4 text-white" />,
      title: "SECURE PAYMENTS",
      desc: "Your data is always encrypted and your payments are secure.",
      isGold: false
    },
    {
      icon: <Award size={32} className="mb-4 text-[#0f0f0f]" />,
      title: "100% QUALITY ASSURANCE",
      desc: "We ensure you only get items in the finest condition, exactly as described.",
      isGold: true
    },
    {
      icon: <Gem size={28} className="mb-4 text-white" />,
      title: "SEAMLESS EXPERIENCE",
      desc: "From browsing to delivery, we offer a truly seamless process.",
      isGold: false
    }
  ];

  return (
    <section className="py-24 relative bg-transparent border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-4"
        >
          Built on Trust
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#f2f2f2]/70 max-w-xl mx-auto mb-16"
        >
          Your confidence is our top priority. We go above and beyond to ensure a safe and secure process.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          
          {/* Top connecting line */}
          <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-white/10 -z-10" />

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl flex flex-col items-center text-center shadow-xl border ${
                card.isGold 
                  ? 'bg-gradient-gold border-gold-400 text-[#0f0f0f] scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] z-10' 
                  : 'bg-[#151515] border-white/5 text-[#f2f2f2]'
              }`}
            >
              {/* Connecting dot for the line */}
              <div className="hidden lg:block absolute -top-8 w-px h-8 bg-white/10" />
              <div className="hidden lg:block absolute -top-9 w-2 h-2 rounded-full bg-white/30" />
              
              {card.icon}
              <h3 className={`text-sm font-bold tracking-widest mb-3 ${card.isGold ? 'text-[#0f0f0f]' : 'text-white'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${card.isGold ? 'text-[#0f0f0f]/80' : 'text-[#f2f2f2]/60'}`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
