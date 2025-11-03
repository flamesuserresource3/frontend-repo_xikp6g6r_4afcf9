import { useMemo, useState } from 'react';
import Lightbox from './Lightbox';

const CATEGORIES = [
  'All',
  'Automobile',
  'Construction',
  'Events',
  'Interior',
  'Educational/Informative Reels',
  'Logo Animation',
  'SaaS Explainer',
  'Shops/Product',
  'Weddings',
];

const PROJECTS = [
  {
    id: 1,
    title: 'Electric Drive Campaign',
    category: 'Automobile',
    yt: 'a3ICNMQW7Ok',
    description: 'Punchy automotive spot showcasing sleek lines and speed.',
  },
  {
    id: 2,
    title: 'Skyscraper Timelapse',
    category: 'Construction',
    yt: 'J---aiyznGQ',
    description: 'From blueprint to skyline — precision over months distilled to minutes.',
  },
  {
    id: 3,
    title: 'Conference Highlights',
    category: 'Events',
    yt: 'dQw4w9WgXcQ',
    description: 'High-energy recap with crowd moments and key speakers.',
  },
  {
    id: 4,
    title: 'Minimalist Loft Tour',
    category: 'Interior',
    yt: 'L_jWHffIx5E',
    description: 'Soft light, neutral palette — architectural storytelling.',
  },
  {
    id: 5,
    title: 'Quick Edit Tips',
    category: 'Educational/Informative Reels',
    yt: '9bZkp7q19f0',
    description: 'Short-form tutorial series designed for fast learning.',
  },
  {
    id: 6,
    title: 'Logo Reveal Pack',
    category: 'Logo Animation',
    yt: 'l482T0yNkeo',
    description: 'Crisp motion identities with modern typographic flair.',
  },
  {
    id: 7,
    title: 'SaaS Dashboard Explainer',
    category: 'SaaS Explainer',
    yt: 'Zi_XLOBDo_Y',
    description: 'Clean product walkthrough blending UI and motion graphics.',
  },
  {
    id: 8,
    title: 'Boutique Product Reel',
    category: 'Shops/Product',
    yt: 'hTWKbfoikeg',
    description: 'Texture-focused macro shots and playful transitions.',
  },
  {
    id: 9,
    title: 'Vows and Moments',
    category: 'Weddings',
    yt: 'eY52Zsg-KVI',
    description: 'Timeless storytelling with emotive color and music.',
  },
  {
    id: 10,
    title: 'Hypercars Night Ride',
    category: 'Automobile',
    yt: 'ktvTqknDobU',
    description: 'Neo-noir city lights and rolling shots at speed.',
  },
];

function toThumb(ytId) {
  return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
}
function toEmbed(ytId) {
  return `https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&autoplay=1`;
}

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  const openProject = (id) => setOpenId(id);
  const closeLightbox = () => setOpenId(null);

  const activeProject = useMemo(() => PROJECTS.find((p) => p.id === openId), [openId]);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Portfolio</h3>
            <p className="text-zinc-400 mt-1">Visual storytellers redefining motion.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3.5 py-2 rounded-full text-sm border transition-colors ${
                active === cat
                  ? 'bg-[#ff6600] border-[#ff6600] text-black'
                  : 'border-zinc-800 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40 cursor-pointer"
              onClick={() => openProject(p.id)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={toThumb(p.yt)}
                  alt={`${p.title} — ${p.category}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-medium">{p.title}</h4>
                  <p className="text-xs text-zinc-400">{p.category}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-[#00ffd1]/10 text-[#00ffd1] border border-[#00ffd1]/20">View</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox
        open={!!activeProject}
        onClose={closeLightbox}
        videoUrl={activeProject ? toEmbed(activeProject.yt) : ''}
        title={activeProject?.title}
        description={activeProject?.description}
      />
    </section>
  );
}
