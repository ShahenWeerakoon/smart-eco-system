// components/home/LatestArrivals.tsx
import ProductCard from "../ui/ProductCard";
import { latestProducts } from "../../lib/data";

export default function LatestArrivals() {
  return (
    <section className="px-10 py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-2xl font-serif">LATEST ARRIVALS</h2>
          <p className="text-sm text-gray-500">
            Discover Our Latest Arrivals And Timeless Classics
          </p>
        </div>

        <button className="border px-5 py-2 text-sm">Shop All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {latestProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
