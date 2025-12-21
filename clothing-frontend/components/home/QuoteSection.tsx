// components/home/QuoteSection.tsx
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="relative h-[450px]">
      <Image
        src="/images/quatotaton.png"
        alt="Quote"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center px-10 text-white">
        <blockquote className="max-w-xl">
          <p className="text-[24px] italic mb-4">
            “Style is a way to say who you are without having to speak.”
          </p>
          <span className="text-sm tracking-widest">— RACHEL ZOE</span>
        </blockquote>
      </div>
    </section>
  );
}
