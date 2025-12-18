// components/home/ShopCategories.tsx
import Image from "next/image";

export default function ShopCategories() {
  return (
    <section className="grid md:grid-cols-2">
      {/* MEN */}
      <div className="relative h-[650px]">
        <Image
          src="/images/men1.png"
          alt="Shop Men"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h3 className="text-3xl font-serif mb-4">SHOP MEN</h3>
          <button className="bg-white text-black px-6 py-2 text-sm">
            VIEW PRODUCTS
          </button>
        </div>
      </div>

      {/* WOMEN */}
      <div className="relative h-[650px]">
        <Image
          src="/images/women1.png"
          alt="Shop Women"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h3 className="text-3xl font-serif mb-4">SHOP WOMEN</h3>
          <button className="bg-white text-black px-6 py-2 text-sm">
            VIEW PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
