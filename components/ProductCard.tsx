"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);

  return (
    <div className="card-hover gradient-border rounded-2xl bg-white/[0.03] overflow-hidden flex flex-col">
      <div className="w-full aspect-square bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
        <span className="text-6xl select-none">🖨️</span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <div className="flex flex-wrap gap-1 mb-2">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/shop/${product.id}`}>
            <h3 className="font-semibold text-white hover:gradient-text transition-all">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-white/40 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
