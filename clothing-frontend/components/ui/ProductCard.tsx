// src/components/ui/ProductCard.tsx
import Image from "next/image";
import { Product } from "../../lib/data";

export default function ProductCard({ image, title, price }: Product) {
  return (
    <div className="space-y-3">
      <Image
        src={image}
        alt={title}
        width={400}
        height={500}
        className="object-cover"
      />
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{price}</p>
    </div>
  );
}
