import Link from "next/link";
import { Mail, ArrowRight, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-2xl font-bold tracking-tighter mb-4 block">
              Closete<span className="text-brand-500">.</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Elevating digital experiences with premium design and cutting-edge web technologies. We build for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-slate-400 hover:text-brand-500 transition-colors">Home</Link></li>
              <li><Link href="#features" className="text-slate-400 hover:text-brand-500 transition-colors">Features</Link></li>
              <li><Link href="#about" className="text-slate-400 hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} />
                <span>hello@closete.com</span>
              </li>
              <li className="text-slate-400">
                123 Innovation Drive<br />
                Tech City, TC 10010
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Closete. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
