import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0b] pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 relative z-10">
          
          <div className="col-span-1 md:col-span-4">
            <Link href="#home" className="text-3xl font-serif text-gold-400 mb-6 block">
              Closeté
            </Link>
            <p className="text-[#f2f2f2]/60 text-sm max-w-sm mb-6 leading-relaxed">
              Buy and sell authentic luxury bags, shoes, and accessories. The premium secondary market experience.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">COMPANY</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">How it works</Link></li>
              <li><Link href="#" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">PLATFORM</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">Sell with us</Link></li>
              <li><Link href="#" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">Authentication</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-wider mb-6">CONNECT</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">Instagram</Link></li>
              <li><Link href="#" className="text-[#f2f2f2]/60 text-sm hover:text-gold-400 transition-colors">Twitter</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Giant Watermark Logo */}
        <div className="w-full flex justify-center items-end mt-12 mb-8 pointer-events-none select-none relative z-0">
          <h1 className="text-[12vw] font-serif font-bold text-white/5 leading-none m-0 p-0 tracking-tight">
            Closeté
          </h1>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-xs text-[#f2f2f2]/40 relative z-10">
          <p>&copy; {new Date().getFullYear()} CLOSETE. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}
