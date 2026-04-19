"use client";

import Link from "next/link";
import { useCart } from "@/lib/store";

export default function Navbar() {
  const count = useCart((s) => s.count());

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight gradient-text">
          Dach3D
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/shop"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/custom"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Custom Print
          </Link>
          <Link
            href="/cart"
            className="relative text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-purple-500 text-white text-[10px] flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
