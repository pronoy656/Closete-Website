"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/GoldButton";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setActiveLink(href);
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
      } else if (targetId === "home") {
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why choose us?", href: "#why-choose-us" },
    { name: "App Preview", href: "#app-preview" },
    { name: "Our Vision", href: "#our-vision" },
  ].map(link => ({
    ...link,
    href: isHomePage ? link.href : `/${link.href}`
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "lg:bg-black/40 lg:backdrop-blur-md py-4 shadow-none lg:shadow-lg" : "py-4 lg:py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12">
        {/* Navbar Gradient Border Wrapper (Mobile only) */}
        <div className="w-full rounded-full p-[1px] lg:p-0 bg-gradient-to-r from-white from-10% via-gray-400/80 via-70% to-transparent lg:bg-none">
          {/* Navbar Inner Wrapper (Pill on Mobile, Transparent on Desktop) */}
          <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#1F2125] to-[#101113] lg:bg-none lg:bg-transparent rounded-full lg:border-none px-2 h-[58px] lg:h-auto lg:p-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] lg:shadow-none backdrop-blur-xl lg:backdrop-blur-none">
          
          {/* Left Group (Hamburger + Logo) */}
          <div className="flex items-center gap-2 lg:gap-0">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-full bg-[#35373c] text-white flex items-center justify-center border border-white/5 shadow-inner transition-colors hover:bg-[#404348]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} color="#ffffff" /> : <Menu size={20} strokeWidth={2.5} color="#ffffff" />}
            </button>

            {/* Logo */}
            <Link 
              href={isHomePage ? "#home" : "/"} 
              className="text-[30px] lg:text-[44px] font-serif font-medium antialiased text-gradient-gold tracking-tight ml-2 lg:ml-0 drop-shadow-sm" 
              onClick={(e) => handleNavClick(e, isHomePage ? "#home" : "/")}
            >
              Closeté
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav 
            className="hidden lg:flex items-center gap-1 relative px-2 py-1.5 rounded-full"
            style={{ 
              background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-[14px] lg:text-[18px] font-medium px-5 py-2 rounded-full transition-all duration-300 focus:outline-none outline-none ${
                  activeLink === link.href
                    ? "text-white"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
                style={{
                  background: activeLink === link.href ? "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)" : "transparent",
                  boxShadow: activeLink === link.href ? "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 8px rgba(0,0,0,0.1)" : "none",
                  border: activeLink === link.href ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent"
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <GoldButton href="mailto:support@closete.app" size="sm" className="flex items-center justify-center gap-1 h-[46px] lg:h-auto py-2 px-4 lg:py-2.5 lg:px-5 rounded-full text-[15px] lg:text-base font-normal whitespace-nowrap">
              Contact Us
              <ArrowRight color="black" className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </GoldButton>
          </div>

        </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/70 backdrop-blur-[24px] border-b border-white/10 flex flex-col items-center py-6 gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium focus:outline-none outline-none ${activeLink === link.href ? "text-gold-400" : "text-[#f2f2f2]/70 hover:text-[#f2f2f2]"}`}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <GoldButton
            href="mailto:support@closete.app"
            size="md"
            className="flex items-center gap-2 h-auto py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
            <ArrowRight color="black" className="w-5 h-5" />
          </GoldButton>
        </motion.nav>
      )}
    </header>
  );
}
