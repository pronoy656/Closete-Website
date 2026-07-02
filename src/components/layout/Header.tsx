"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/GoldButton";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-black/40 backdrop-blur-md py-4 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="#home" className="text-3xl font-serif text-gradient-gold tracking-tight" onClick={() => setActiveLink("#home")}>
          Closeté
        </Link>
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
      onClick={() => setActiveLink(link.href)}
      className={`relative text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
        activeLink === link.href
          ? "text-white"
          : "text-white/80 hover:text-white hover:bg-white/5"
      }`}
      style={activeLink === link.href ? {
        background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
        boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 8px rgba(0,0,0,0.1)",
        border: "1px solid rgba(255,255,255,0.1)"
      } : {}}
    >
      {link.name}
    </Link>
  ))}
</nav>
        
        <div className="hidden lg:block">
          <GoldButton href="#contact" size="sm" style={{ fontSize: "0.82rem" }} className="flex items-center gap-1.5 h-auto py-2.5">
            Contact Us
            <ArrowRight color="black" className="w-4 h-4" />
          </GoldButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#f2f2f2]/70 hover:text-[#f2f2f2]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              className={`text-lg font-medium ${activeLink === link.href ? "text-gold-400" : "text-[#f2f2f2]/70 hover:text-[#f2f2f2]"}`}
              onClick={() => {
                setActiveLink(link.href);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <GoldButton
            href="#contact"
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
