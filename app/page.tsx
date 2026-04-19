import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-purple-400 mb-6 font-medium">
            Custom 3D Printing Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Bring Your Ideas{" "}
            <span className="gradient-text">to Life</span>
          </h1>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Premium 3D printed products — from artistic figurines to functional
            everyday objects. Order premade or request something entirely custom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Browse Shop
            </Link>
            <Link
              href="/custom"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white/70 font-semibold hover:border-white/30 hover:text-white transition-all"
            >
              Request Custom Print
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "✦",
              title: "High-Detail Prints",
              desc: "FDM and resin printing for fine detail or large-format builds.",
            },
            {
              icon: "⬡",
              title: "Multiple Materials",
              desc: "PLA, PETG, ABS, resin — we match the material to your use case.",
            },
            {
              icon: "◈",
              title: "Custom Orders",
              desc: "Send us your model or describe what you need. We handle the rest.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <span className="text-2xl gradient-text mt-0.5">{f.icon}</span>
              <div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
                Popular
              </p>
              <h2 className="text-3xl font-bold">Featured Prints</h2>
            </div>
            <Link
              href="/shop"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center gradient-border rounded-3xl bg-white/[0.02] p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have something in mind?
          </h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            We can print almost anything. Share your model or idea and we&apos;ll
            give you a quote.
          </p>
          <Link
            href="/custom"
            className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
