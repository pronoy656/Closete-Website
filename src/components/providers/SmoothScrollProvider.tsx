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
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoResize: true,
    });
    
    lenisRef.current = lenis;
    // @ts-ignore
    window.lenis = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Observe document body size changes so Lenis recalculates bounds dynamically
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      // @ts-ignore
      delete window.lenis;
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
      lenisRef.current.scrollTo(0, { immediate: true });
      lenisRef.current.resize();
    } else {
      window.scrollTo(0, 0);
    }

    const timers = [100, 300, 600].map((delay) =>
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
        }
      }, delay)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return <>{children}</>;
}
