import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Dach3D. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-white/30">
          <Link href="/shop" className="hover:text-white/60 transition-colors">
            Shop
          </Link>
          <Link href="/custom" className="hover:text-white/60 transition-colors">
            Custom Print
          </Link>
          <Link href="/cart" className="hover:text-white/60 transition-colors">
            Cart
          </Link>
        </div>
      </div>
    </footer>
  );
}
