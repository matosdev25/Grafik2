import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Target, ShoppingBag, Eye } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 23,
    seconds: 43
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Offer Banner */}
        <div className="mb-16 flex justify-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl shadow-black/20 inline-flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span className="text-white/90 font-medium">
                <span className="font-bold text-white">Oferta Especial:</span> ¡20% de descuento en todos los planes!
              </span>
              <span className="text-white/70 ml-2">Termina en:</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-lg px-3 py-2 min-w-[50px] text-center">
                <span className="text-white font-bold text-lg">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-lg px-3 py-2 min-w-[50px] text-center">
                <span className="text-white font-bold text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <div className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-lg px-3 py-2 min-w-[50px] text-center">
                <span className="text-white font-bold text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Le damos un estilo{' '}
              <span className="text-teal-400">único</span>{' '}
              a tus ideas.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Diseño gráfico profesional, flyers creativos, videos impactantes, logos memorables y arquitectura innovadora. Todo lo que necesitas para destacar.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Comprar ahora
              </button>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Ver portafolio
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Video Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl aspect-[3/4] flex items-center justify-center mb-6 group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                <Play className="w-16 h-16 text-teal-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Videos</h3>
              <p className="text-white/60 text-sm">Contenido profesional</p>
            </div>

            {/* Diseños Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl aspect-[3/4] flex items-center justify-center mb-6 group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                <Sparkles className="w-16 h-16 text-teal-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Diseños</h3>
              <p className="text-white/60 text-sm">Creatividad única</p>
            </div>

            {/* Proyectos Card - Full Width */}
            <div className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl w-24 h-24 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                  <Target className="w-12 h-12 text-teal-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-1">Proyectos</h3>
                  <p className="text-white/60">+500 trabajos completados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
