import api from "../lib/api";

export default async function Home() {
  let products = [];

  try {
    const response = await api.get("products");
    products = response.data;
  } catch (error) {
    console.error("WooCommerce API Error:", error.message);
  }

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
