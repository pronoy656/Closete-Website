"use client";

import { getImageProps } from "next/image";

export function MapSection() {
  const common = { alt: "Where we Operate", sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, width: 1632, height: 964, src: "/map.webp" });
  
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, width: 1412, height: 1960, src: "/where-we-operate-mobile.webp" });

  return (
    <section className="pt-[70px] lg:pt-40 pb-0 lg:pb-10 bg-transparent relative z-10 w-full flex justify-center">
      <div className="container mx-auto px-4 lg:px-12 relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
          <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
          <img
            {...rest}
            className="w-full h-auto object-contain"
          />
        </picture>
      </div>
    </section>
  );
}
