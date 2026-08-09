"use client";

import { Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function ContactSection() {
  const { ref: leftRef, isIntersecting: leftIsVisible } = useInView({ triggerOnce: true });
  const { ref: formRef, isIntersecting: formIsVisible } = useInView<HTMLFormElement>({ triggerOnce: true });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-950/20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto glass-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div ref={leftRef}>
              <h2 
                className={`text-3xl md:text-5xl font-bold mb-6 reveal reveal-up ${leftIsVisible ? 'is-visible' : ''}`}
              >
                Let&apos;s work <br /> <span className="text-gradient">Together</span>
              </h2>
              <p 
                className={`text-slate-400 text-lg mb-8 reveal reveal-up ${leftIsVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: '0.1s' }}
              >
                Ready to take your digital presence to the next level? Drop us a line and let&apos;s start a conversation.
              </p>
              
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
            
            <form 
              ref={formRef}
              className={`space-y-4 reveal reveal-left ${formIsVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
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
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
