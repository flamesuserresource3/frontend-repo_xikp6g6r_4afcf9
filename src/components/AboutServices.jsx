import { Camera, Film, Scissors, Palette, Calendar, Package } from 'lucide-react';

export default function AboutServices() {
  const services = [
    { icon: Camera, title: 'Videography', desc: 'End-to-end production with cinematic camera work.' },
    { icon: Film, title: 'Video Editing', desc: 'Rhythmic cuts and narrative flow that keep viewers engaged.' },
    { icon: Palette, title: 'Color Grading', desc: 'Tailored color science for mood, tone, and brand consistency.' },
    { icon: Scissors, title: 'Motion Graphics', desc: 'Clean titles, lower-thirds, and animated elements.' },
    { icon: Calendar, title: 'Event Coverage', desc: 'From run-and-gun to multi-cam, we capture the moment.' },
    { icon: Package, title: 'Product Videos', desc: 'Studio-grade showcases that make your product shine.' },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">We are F3 CREATIVES</h3>
            <p className="text-zinc-300 leading-relaxed">
              We are F3 CREATIVES — a team of passionate visual artists, videographers, and editors who craft meaningful content that connects.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-zinc-300">
              <div className="rounded-lg border border-zinc-800 p-3">Creativity</div>
              <div className="rounded-lg border border-zinc-800 p-3">Precision</div>
              <div className="rounded-lg border border-zinc-800 p-3">Impact</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              alt="Behind the scenes of a cinematic video shoot"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-14">
          <h4 className="text-xl sm:text-2xl font-semibold mb-6">Services</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition-colors bg-zinc-950/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6600]/15 text-[#ff6600] group-hover:bg-[#ff6600]/20">
                    <Icon size={20} />
                  </span>
                  <h5 className="text-lg font-medium">{title}</h5>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
