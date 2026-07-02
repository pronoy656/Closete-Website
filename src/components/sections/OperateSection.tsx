import Image from "next/image";

export function OperateSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-transparent relative z-10">
      <div 
        className="max-w-6xl mx-auto rounded-[2.5rem] p-10 lg:p-16 flex flex-col items-center text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #1c1c1f 0%, #151518 100%)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.05)"
        }}
      >
        {/* Headings */}
        <h2 className="text-4xl lg:text-[2.75rem] font-serif text-[#f2f2f2] tracking-tight mb-4 mt-4">
          Where we Operate
        </h2>
        <p className="text-[#a1a1aa] max-w-2xl text-sm lg:text-[15px] leading-relaxed mb-12">
          Closete is currently operating in Dubai, with expansion across the UAE<br className="hidden md:block" /> planned in the coming months.
        </p>

        {/* Map Graphic */}
        <div className="relative w-full max-w-4xl aspect-[2/1] mb-12 flex justify-center items-center">
          <Image
            src="/map-1.png"
            alt="World Map showing UAE"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom Text */}
        <p className="text-[#8e8e93] max-w-2xl text-[11px] lg:text-xs leading-[1.8] uppercase tracking-[0.08em] mb-4">
          We are building towards <strong className="text-[#f2f2f2] font-semibold">a global marketplace</strong> for <br className="hidden md:block" />
          <strong className="text-[#f2f2f2] font-semibold">luxury resale</strong> – starting with a highly controlled, <br className="hidden md:block" />
          trusted local experience.
        </p>
      </div>
    </section>
  );
}
