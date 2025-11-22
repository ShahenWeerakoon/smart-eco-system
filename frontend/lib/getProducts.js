import axios from "axios";

export async function getProducts() {
  const consumerKey = "YOUR_CONSUMER_KEY";
  const consumerSecret = "YOUR_CONSUMER_SECRET";

  const response = await axios.get(
    "http://localhost/wp-tshirt/wordpress/wp-json/wc/v3/products",
    {
      auth: {
        username: ck_e1c7dfcf32a4b407cc7c106ed47d403876a58801,
        password: cs_b2bb3406c7c657d2a7473a79b20ab54ab259f5b6,
      },
    }
  );

  return response.data;
}
