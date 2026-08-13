"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable Lenis on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1, // A good default for smooth scrolling
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;
    // @ts-ignore
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        try {
          const el = document.querySelector<HTMLElement>(hash);
          if (el) {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(el, { immediate: true });
            } else {
              el.scrollIntoView();
            }
            return;
          }
        } catch (e) {
          // ignore invalid selectors
        }
      }, 50);
      return;
    }

    if (lenisRef.current) {
      // Smoothly scroll to top when path changes
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return <>{children}</>;
}
