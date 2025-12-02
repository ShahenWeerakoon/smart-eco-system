import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "Simple WooCommerce Store with Next.js (Headless)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">

        {/* NAVBAR */}
        <header className="w-full bg-white shadow-sm p-4">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">

            {/* LEFT: Men / Women */}
            <div className="flex gap-6">
              <a href="/men" className="hover:text-blue-500 font-medium">Men</a>
              <a href="/women" className="hover:text-blue-500 font-medium">Women</a>
            </div>

            {/* CENTER: Logo */}
            <a href="/" className="flex items-center justify-center">
              <Image 
                src="/assets/SLAUGHERlogo.jpg"
                alt="Brand Logo"
                width={80}
                height={80}
                className="cursor-pointer"
              />
            </a>

            {/* RIGHT: Search | Account | Cart */}
            <div className="flex items-center gap-6">
              <button title="Search">🔍</button>
              <button title="Account">👤</button>
              <a href="/cart" title="Cart">🛒</a>
            </div>

          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
        
      </body>
    </html>
  );
}
