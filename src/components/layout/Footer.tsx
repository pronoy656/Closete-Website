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
    <footer className="bg-[#121212] pt-[41px] md:pt-24 relative overflow-hidden border-t border-white/5 flex flex-col justify-between px-4 md:px-8">
      <div className="w-full max-w-[1250px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-6 lg:gap-10 mb-10 relative z-10">
          
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
              <a href="mailto:support@gmail.com" className="text-white text-[14px] hover:opacity-80 transition-colors">
                support@gmail.com
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
      <div className="w-full flex justify-center items-end mt-4 mb-4 pointer-events-none select-none relative z-0 overflow-hidden">
        <h1 className="text-[22vw] sm:text-[20vw] font-serif text-white/[0.08] leading-[0.8] m-0 p-0 tracking-[-0.04em] translate-y-[-2%]">
          Closeté
        </h1>
      </div>
      
      <div className="w-full max-w-[1250px] mx-auto border-t border-white/10 py-6 text-center text-[13px] text-[#f2f2f2]/70 relative z-10 flex justify-center items-center">
        {/* Golden half-moon glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[80px] md:h-[120px] bg-[#C98C28]/30 blur-[40px] rounded-t-full pointer-events-none z-0" />
        <p className="relative z-10">© 2026 Closete. All rights reserved.</p>
      </div>
    </footer>
  );
}
