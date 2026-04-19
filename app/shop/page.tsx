import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const premade = products.filter((p) => p.category === "premade");

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
          All Products
        </p>
        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-white/40 mt-3 max-w-lg">
          Ready-to-ship 3D printed items. Every piece is printed fresh on order.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {premade.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
