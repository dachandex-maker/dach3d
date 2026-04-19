"use client";

import { useCart } from "@/lib/store";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
          })),
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="text-white/40 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <div className="rounded-2xl bg-white/[0.03] border border-white/5 divide-y divide-white/5 mb-8">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex justify-between items-center px-6 py-4">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-white/40">Qty: {quantity}</p>
            </div>
            <p className="font-semibold gradient-text">
              ${(product.price * quantity).toFixed(2)}
            </p>
          </div>
        ))}
        <div className="flex justify-between items-center px-6 py-5">
          <p className="font-bold">Total</p>
          <p className="text-xl font-bold gradient-text">${total().toFixed(2)}</p>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          {error}
        </p>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting to payment..." : "Pay with Stripe"}
      </button>

      <p className="text-xs text-white/20 text-center mt-4">
        Secure checkout powered by Stripe
      </p>
    </div>
  );
}
