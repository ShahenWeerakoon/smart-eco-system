// src/app/page.tsx
import Hero from "@/components/home/Hero";
import LatestArrivals from "@/components/home/LatestArrivals";
import ShopCategory from "@/components/home/ShopCategory";
import TshirtCollection from "@/components/home/TshirtCollection";
import QuoteSection from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LatestArrivals />
      <ShopCategory />
      <TshirtCollection />
      <QuoteSection />
    </main>
  );
}
