import { useEffect } from 'react';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = 'F3 CREATIVES — Cinematic Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">We craft cinematic experiences</h2>
            <p className="text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              F3 CREATIVES is a studio of visual storytellers dedicated to making brands feel and films move. From concept to cut, we design motion that connects.
            </p>
          </div>
        </section>
        <AboutServices />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-400">
        <p>© {new Date().getFullYear()} F3 CREATIVES. Film. Frame. Feel.</p>
      </footer>
    </div>
  );
}

export default App;
