// src/components/home/Hero.tsx
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[90vh]">
      <Image
        src="/images/hero.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div>
          <p className="tracking-widest text-sm mb-4">
            STEP INTO STYLE - FIND YOUR PERFECT PAIR
          </p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            TRENDY, STYLISH,
            <br /> BRAND NEW!
          </h1>
          <Button label="SHOP NOW" />
        </div>
      </div>
    </section>
  );
}
