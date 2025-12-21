// src/components/layout/Footer.tsx
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-12 text-sm mb-16">
        {/* Information Section */}
        <div>
          <h4 className="mb-6 font-normal text-base">Information</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="cursor-pointer hover:text-white transition">FAQ</li>
            <li className="cursor-pointer hover:text-white transition">
              About Us
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Delivery Details
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Return Policy
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Locations
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Promotions
            </li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="mb-6 font-normal text-base">Account</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="cursor-pointer hover:text-white transition">
              My Account
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Order History
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Wishlist
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Size Guides
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h4 className="mb-6 font-normal text-base">Categories</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="cursor-pointer hover:text-white transition">
              Dresses
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Tops & Tees
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Pants
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Skirts
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="mb-2 font-normal text-base">
            SIGN UP FOR THE FOA NEWSLETTER
          </h4>
          <p className="text-gray-400 text-xs mb-6">
            Be the first to know about our new collections and promotions
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400"
            />
            <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-end gap-4 mb-8">
        <a href="#" className="text-white hover:text-gray-400 transition">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 pt-8">
        <p className="text-center text-gray-500 text-xs">
          © 2025 VELOURA ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
