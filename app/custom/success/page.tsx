import Link from "next/link";

export default function CustomSuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h1 className="text-2xl font-bold mb-3">Request Received!</h1>
      <p className="text-white/40 mb-8">
        Thanks for reaching out. We&apos;ll review your request and get back to
        you with a quote within 24 hours.
      </p>
      <Link
        href="/shop"
        className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
      >
        Back to Shop
      </Link>
    </div>
  );
}
