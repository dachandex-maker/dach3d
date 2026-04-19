"use client";

import Link from "next/link";
import { useCart } from "@/lib/store";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="text-6xl mb-6">🛒</p>
        <h1 className="text-2xl font-bold mb-3">Your cart is empty</h1>
        <p className="text-white/40 mb-8">Add some prints to get started.</p>
        <Link
          href="/shop"
          className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

      <div className="space-y-4 mb-10">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 flex items-center justify-center text-2xl shrink-0">
              🖨️
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-white/40">${product.price.toFixed(2)} each</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                −
              </button>
              <span className="w-6 text-center font-medium">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                +
              </button>
            </div>

            <div className="text-right shrink-0">
              <p className="font-bold gradient-text">
                ${(product.price * quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(product.id)}
                className="text-xs text-white/20 hover:text-red-400 transition-colors mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="text-right">
          <p className="text-sm text-white/40">Total</p>
          <p className="text-3xl font-bold gradient-text">${total().toFixed(2)}</p>
        </div>
        <Link
          href="/checkout"
          className="px-10 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
