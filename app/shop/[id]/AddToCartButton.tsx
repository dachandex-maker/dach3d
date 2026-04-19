"use client";

import { Product } from "@/lib/products";
import { useCart } from "@/lib/store";

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
    >
      Add to Cart
    </button>
  );
}
