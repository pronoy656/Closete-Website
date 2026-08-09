import { useEffect, useState, useRef } from 'react';

export function useInView<T extends Element = HTMLDivElement>({ threshold = 0, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isIntersecting };
}
