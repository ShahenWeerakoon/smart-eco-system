// components/home/TshirtCollection.tsx
import ProductCard from "../ui/ProductCard";
import { tshirtProducts } from "@/lib/data";

export default function TshirtCollection() {
  return (
    <section className="px-10 py-20">
      <div className="flex justify-between mb-12">
        <div>
          <h2 className="text-2xl font-serif">T-SHIRTS COLLECTION</h2>
          <p className="text-sm text-gray-500">
            Discover Our T-Shirts Collection
          </p>
        </div>

        <button className="text-sm underline">
          View All T-Shirts Collection
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {tshirtProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
