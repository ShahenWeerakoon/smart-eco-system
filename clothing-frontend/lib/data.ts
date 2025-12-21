// lib/data.ts
export type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
};

export const latestProducts: Product[] = [
  {
    id: 1,
    image: "/images/late1.png",
    title: "THE UNBOUND TEE",
    price: "Rs. 2,500.00",
  },
  {
    id: 2,
    image: "/images/late2.png",
    title: "V Neck Top - Dynasty Blue",
    price: "Rs. 2,500.00",
  },
  {
    id: 3,
    image: "/images/late3.png",
    title: "THE UNBOUND TEE",
    price: "Rs. 2,500.00",
  },
  {
    id: 4,
    image: "/images/late4.png",
    title: "THE UNBOUND TEE",
    price: "Rs. 2,500.00",
  },
];

export const tshirtProducts = latestProducts;
