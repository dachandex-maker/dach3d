export default function CustomPrintPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">
          Custom Order
        </p>
        <h1 className="text-4xl font-bold mb-3">Request a Custom Print</h1>
        <p className="text-white/40 leading-relaxed">
          Have a specific model, idea, or design? Fill out the form and we&apos;ll
          get back to you with a quote within 24 hours.
        </p>
      </div>

      <form className="space-y-6" action="/api/custom-request" method="POST">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="jane@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">
            What do you want printed?
          </label>
          <textarea
            name="description"
            required
            rows={5}
            placeholder="Describe your idea, or paste a link to a model (e.g. from Printables, Thingiverse)..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Preferred Material
            </label>
            <select
              name="material"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
            >
              <option value="pla">PLA (standard)</option>
              <option value="petg">PETG (durable)</option>
              <option value="abs">ABS (heat resistant)</option>
              <option value="resin">Resin (high detail)</option>
              <option value="unsure">Not sure — advise me</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min={1}
              defaultValue={1}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">
            Color Preference
          </label>
          <input
            type="text"
            name="color"
            placeholder="e.g. Matte black, Galaxy purple, Natural white..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/60 mb-2">
            Additional Notes
          </label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Deadline, budget, special requirements..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
