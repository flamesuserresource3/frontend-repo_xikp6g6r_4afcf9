import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Let’s collaborate</h3>
          <p className="text-zinc-400 mt-2">Tell us about your vision — we’ll craft the motion.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-zinc-800 p-6 bg-black/50"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6600] text-black font-semibold px-5 py-2.5 hover:brightness-110 transition-all"
              >
                <Send size={18} /> Send Message
              </button>
            </div>
          </form>

          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/50 flex flex-col justify-center">
            <h4 className="text-lg font-medium mb-3">Quick Contact</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Prefer a direct line? Reach out via email or Instagram and we’ll respond swiftly.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@f3creatives.studio"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <Mail size={18} className="text-[#00ffd1]" /> hello@f3creatives.studio
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                {/* Using text instead of an Instagram icon to avoid build issues if icon name changes */}
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
                @f3creatives
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
