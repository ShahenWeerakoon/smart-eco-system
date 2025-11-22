import axios from "axios";

const api = axios.create({
  baseURL: process.env.WORDPRESS_API_URL,
  auth: {
    username: process.env.WC_CONSUMER_KEY,
    password: process.env.WC_CONSUMER_SECRET,
  },
});

export default api;
