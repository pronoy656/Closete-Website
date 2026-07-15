"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById("home");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "/#home");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
  return (
    <footer className="bg-[#121212] pt-[41px] md:pt-24 relative overflow-hidden border-t border-white/5 flex flex-col justify-between">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-6 lg:gap-10 mb-12 md:mb-20 lg:mb-28 relative z-10">
          
          {/* Column 1 */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link 
              href={isHomePage ? "#home" : "/"} 
              onClick={handleHomeClick}
              className="text-[42px] md:text-4xl font-serif text-gradient-gold mb-2 md:mb-6 inline-block tracking-tight"
            >
              Closeté
            </Link>
            <p className="text-[#f2f2f2]/80 text-[14px] md:text-[16px] max-w-[340px] md:max-w-[290px] mx-auto md:mx-0 leading-relaxed">
              Luxury Resale Secured. Authenticated, insured, and curated for the archival fashion collector.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-medium text-xs tracking-widest mb-3 pb-3 border-b border-white/10 uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-3 mt-5">
              <li><Link href="/privacy" className="text-white text-[14px] hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white text-[14px] hover:text-gold-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/delivery" className="text-white text-[14px] hover:text-gold-400 transition-colors">Returns & Delivery Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-medium text-xs tracking-widest mb-3 pb-3 border-b border-white/10 uppercase">
              CONTACT US
            </h4>
            <div className="mt-5 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#f2f2f2]/50 text-[14px] mb-1">
                <Mail size={16} strokeWidth={1.5} />
                <span>Email</span>
              </div>
              <a href="mailto:support@closete.app" className="text-white text-[14px] hover:opacity-80 transition-colors">
                support@closete.app
              </a>
            </div>
          </div>
          
          {/* Column 4 */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-medium text-xs tracking-widest mb-3 pb-3 border-b border-white/10 uppercase">
              LOCATION
            </h4>
            <div className="mt-5 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#f2f2f2]/50 text-[14px] mb-1">
                <MapPin size={16} strokeWidth={1.5} />
                <span>Country</span>
              </div>
              <span className="text-white text-[14px]">
                Dubai, UAE
              </span>
            </div>
          </div>

        </div>
      </div>
        
      {/* Giant Watermark Logo */}
      <div className="container mx-auto px-4 lg:px-12 flex justify-center items-end mt-4 -mb-2 md:-mb-6 pointer-events-none select-none relative z-0">
        <svg viewBox="0 0 660 220" overflow="visible" className="w-full h-auto text-white/[0.08]">
          <text 
            x="50%" 
            y="75%" 
            textAnchor="middle"
            fill="currentColor" 
            className="font-serif" 
            style={{ fontSize: '200px', letterSpacing: '-0.02em' }}
          >
            Closeté
          </text>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 lg:px-12 border-t border-white/10 py-6 text-center text-[13px] text-[#f2f2f2]/70 relative z-10 flex justify-center items-center">
        <p className="relative z-10">© 2026 Closete. All rights reserved.</p>
      </div>
    </footer>
  );
}
