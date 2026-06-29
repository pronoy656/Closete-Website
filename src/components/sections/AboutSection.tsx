"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden glass p-2 border border-white/10 shadow-2xl">
              <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-brand-900 to-slate-900">
                {/* Abstract geometric shapes to substitute an image */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "1s" }} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 backdrop-blur-[2px]">
                  <h3 className="text-3xl font-bold text-white mb-2">Since 2026</h3>
                  <p className="text-brand-200">Innovating the Digital Space</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-dark p-6 rounded-2xl hidden md:block border border-white/10">
                <p className="text-3xl font-bold text-white">99%</p>
                <p className="text-sm text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Design that <span className="text-gradient">Inspires</span>,<br />
              Code that <span className="text-gradient">Performs</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We are a team of passionate designers and developers dedicated to crafting premium digital experiences. We believe that a website should not only look stunning but also perform flawlessly under the hood.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Pixel-perfect UI/UX design",
                "Advanced performance optimization",
                "Strategic SEO implementation",
                "Scalable architecture"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle2 className="text-brand-500 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-white text-slate-950 font-semibold transition-all hover:bg-slate-200">
              Discover Our Process
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
