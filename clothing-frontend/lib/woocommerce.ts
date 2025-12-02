import axios from "axios";

const WP_URL = "http://clothing-store.local"; // your local WP URL
const JWT_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vY2xvdGhpbmctc3RvcmUubG9jYWwiLCJpYXQiOjE3NjQ2ODEyMzQsIm5iZiI6MTc2NDY4MTIzNCwiZXhwIjoxNzY1Mjg2MDM0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.00lnFO8VxZ0nDCf4yfMCi1LFzxKCk9wBHmPZiBdV--g"; // your JWT token

export async function getProducts(categorySlug?: string) {
  try {
    const response = await axios.get(`${WP_URL}/wp-json/wc/v3/products`, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
      params: categorySlug ? { category: categorySlug } : {},
    });
    return response.data; // returns array of products
  } catch (error: any) {
    console.error("Full WooCommerce Error:", error.response?.data || error.message);
    return [];
  }
}
