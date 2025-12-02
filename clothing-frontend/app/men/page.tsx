import { getProducts } from "../../lib/woocommerce";
import Image from "next/image";

export default async function MenPage() {
  const products = await getProducts("men"); // use exact category slug from WP

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <Image
              src={product.images[0]?.src || "/assets/placeholder.png"}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover rounded"
            />
            <h2 className="mt-2 font-medium">{product.name}</h2>
            <p className="text-blue-500 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
