// components/Header.tsx
import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black text-white">
      {/* Main Header - Fixed height 172px */}
      <div className="h-[172px] relative">
        {/* Two horizontal lines - one on each side of the logo */}
        <div
          className="absolute left-20 top-[86px] h-[1px] bg-white"
          style={{ width: "calc(50% - 178px)" }}
        ></div>
        <div
          className="absolute right-20 top-[86px] h-[1px] bg-white"
          style={{ width: "calc(50% - 178px)" }}
        ></div>

        <div className="container mx-auto h-full flex items-center justify-between px-6">
          {/* Left: MEN/WOMEN below the line */}
          <div className="flex items-center space-x-6 text-xs tracking-wider absolute left-20 top-[100px] z-10">
            <span className="hover:text-gray-300 cursor-pointer transition">
              MEN
            </span>
            <span className="hover:text-gray-300 cursor-pointer transition">
              WOMEN
            </span>
          </div>

          {/* Center: Logo - 356px width, 172px height */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <img
              src="/images/logo.png"
              alt="SLAUGHTER Logo"
              className="w-[356px] h-[172px] object-contain"
            />
          </div>

          {/* Right: Search/User/Cart below the line */}
          <div className="flex items-center space-x-5 absolute right-20 top-[100px] z-10">
            {/* Search */}
            <div className="flex items-center border border-white px-3 py-1.5 min-w-[180px]">
              <input
                type="text"
                placeholder="search.."
                className="bg-transparent text-white placeholder-gray-400 outline-none text-xs flex-1"
              />
              <Search size={16} className="ml-2 text-white" />
            </div>

            {/* User Icon */}
            <User
              size={20}
              className="cursor-pointer hover:text-gray-300 transition"
            />

            {/* Cart Icon with Badge */}
            <div className="relative cursor-pointer hover:text-gray-300 transition">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-black py-2.5">
        <p className="text-center text-xs tracking-wide text-gray-300">
          DON'T MISS OUT ON OUR EXCLUSIVE SPECIAL OFFER – ENJOY A MASSIVE 40%
          OFF ON YOUR FAVORITE ITEMS! HURRY, THIS LIMITED-TIME DEAL WON'T LAST
          LONG!
        </p>
      </div>
    </header>
  );
}
