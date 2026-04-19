import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center text-9xl">
          🖨️
        </div>

        {/* Info */}
        <div>
          <div className="flex flex-wrap gap-1 mb-4">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-white/50 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-3xl font-bold gradient-text mb-8">
            ${product.price.toFixed(2)}
          </div>

          <AddToCartButton product={product} />

          <div className="mt-8 pt-8 border-t border-white/5 space-y-3 text-sm text-white/40">
            <p>✓ Printed fresh on every order</p>
            <p>✓ Ships within 3–5 business days</p>
            <p>✓ Custom color available — contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
