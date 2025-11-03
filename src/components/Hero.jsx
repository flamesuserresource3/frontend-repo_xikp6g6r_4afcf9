import Spline from '@splinetool/react-spline';

export default function Hero() {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6600] to-[#00ffd1]">
              F3 CREATIVES
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 max-w-2xl">
            Visual storytellers crafting cinematic experiences.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToPortfolio}
              className="inline-flex items-center rounded-full px-6 py-3 bg-[#ff6600] text-black font-semibold hover:brightness-110 transition-all"
            >
              View Our Work
            </button>
          </div>
          <p className="text-zinc-400 text-sm">Cinematic content that connects.</p>
        </div>
      </div>
    </header>
  );
}
