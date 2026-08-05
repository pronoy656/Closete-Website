import Image from "next/image";

export function OperateSection() {
  return (
    <section className="w-full relative z-10 flex justify-center bg-transparent">
      <div className="w-full max-w-[1920px] mx-auto relative">
        <Image
          src="/where-we-operate.png"
          alt="Where we Operate"
          width={4960}
          height={2932}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
