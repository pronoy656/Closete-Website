"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Search, Smartphone, Layers, LineChart } from "lucide-react";

const features = [
  {
    icon: <Zap size={24} className="text-brand-400" />,
    title: "Lightning Fast",
    description: "Built with Next.js App Router for unparalleled performance and rapid page loads."
  },
  {
    icon: <Search size={24} className="text-brand-400" />,
    title: "SEO Optimized",
    description: "Structure and metadata optimized from the ground up for maximum search engine visibility."
  },
  {
    icon: <Smartphone size={24} className="text-brand-400" />,
    title: "Responsive Design",
    description: "Flawless experience across all devices, from mobile phones to ultra-wide displays."
  },
  {
    icon: <Layers size={24} className="text-brand-400" />,
    title: "Premium Aesthetics",
    description: "Modern glassmorphism, dynamic gradients, and smooth micro-animations."
  },
  {
    icon: <Shield size={24} className="text-brand-400" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security practices ensuring your data and users are safe."
  },
  {
    icon: <LineChart size={24} className="text-brand-400" />,
    title: "Data Driven",
    description: "Built-in analytics support to track your growth and user engagement."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Powerful <span className="text-gradient">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Everything you need to launch a successful marketing campaign and convert visitors into loyal customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:glass-dark transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
