"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-950/20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto glass-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Let's work <br /> <span className="text-gradient">Together</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 text-lg mb-8"
              >
                Ready to take your digital presence to the next level? Drop us a line and let's start a conversation.
              </motion.p>
              
              <div className="space-y-6 text-slate-300">
                <p>
                  <strong className="block text-white mb-1">Email</strong>
                  hello@closete.com
                </p>
                <p>
                  <strong className="block text-white mb-1">Phone</strong>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
