import React from 'react';
import { Instagram } from 'lucide-react';

const Portafolio = () => {
  // Mock portfolio images - using placeholder service
  const portfolioItems = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${1600000000000 + i * 10000000}?w=400&h=500&fit=crop`
  }));

  return (
    <section className="py-20 px-4" id="portafolio">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Portafolio</h2>
          <p className="text-white/70 text-lg">Algunos de nuestros trabajos recientes</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-300 group aspect-[4/5]"
            >
              <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                <span className="text-white/40 text-sm font-medium">Proyecto {item.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-purple-500/30">
            <Instagram className="w-5 h-5" />
            Ver más en Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
