"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/store";

export default function OrderSuccessPage() {
  const clearCart = useCart((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-2xl font-bold mb-3">Order Confirmed!</h1>
      <p className="text-white/40 mb-8">
        Thank you for your purchase! Your prints are queued and will ship within
        3–5 business days. Check your email for a confirmation.
      </p>
      <Link
        href="/shop"
        className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
