import React, { useState, useEffect, useRef } from "react";
import { Play, Sparkles, Target, ShoppingBag, Eye } from "lucide-react";

const getNextMonthStart = (from = new Date()) => {
  return new Date(from.getFullYear(), from.getMonth() + 1, 1, 0, 0, 0, 0);
};

const msToParts = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const Hero = () => {
  const targetRef = useRef(getNextMonthStart());
  const [timeLeft, setTimeLeft] = useState(() =>
    msToParts(targetRef.current - new Date())
  );

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      let diff = targetRef.current - now;

      if (diff <= 0) {
        targetRef.current = getNextMonthStart(now);
        diff = targetRef.current - now;
      }

      setTimeLeft(msToParts(diff));
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { v: String(timeLeft.days).padStart(2, "0"), l: "DÍAS" },
    { v: String(timeLeft.hours).padStart(2, "0"), l: "HRS" },
    { v: String(timeLeft.minutes).padStart(2, "0"), l: "MIN" },
    { v: String(timeLeft.seconds).padStart(2, "0"), l: "SEG" },
  ];

  return (
    <section className="font-gilroy pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Offer Banner */}
        <div className="mb-10 lg:mb-16 flex justify-center">
          <div className="w-full max-w-[520px] sm:max-w-2xl lg:max-w-[980px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-full px-4 py-4 sm:px-6 lg:px-8 lg:py-4 shadow-2xl shadow-black/20">
            {/* MÓVIL: centrado */}
            <div className="lg:hidden">
              <div className="space-y-1 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl">🔥</span>
                  <span className="font-queering font-bold text-white text-sm sm:text-base">
                    Oferta Especial:
                  </span>
                </div>

                <div className="text-white/90 text-sm sm:text-base font-medium">
                  ¡20% de descuento en todos los planes!
                </div>

                <div className="text-white/70 text-sm sm:text-base">
                  Termina en:
                </div>
              </div>

              <div className="mt-3 flex justify-center">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 w-full">
                  {timerItems.map((x) => (
                    <div
                      key={x.l}
                      className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-xl px-3 py-2 text-center"
                    >
                      <div className="text-white font-bold text-lg leading-5">
                        {x.v}
                      </div>
                      <div className="text-[10px] text-white/70 leading-3 mt-1">
                        {x.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ESCRITORIO: una línea + "Termina en:" pegado al contador */}
            <div className="hidden lg:flex items-center justify-between gap-6">
              {/* Texto */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <span className="text-xl">🔥</span>

                <span className="text-white/90 text-base font-medium min-w-0 truncate whitespace-nowrap">
                  <span className="font-queering font-bold text-white">
                    Oferta Especial:
                  </span>{" "}
                  ¡20% de descuento en todos los planes!
                </span>
              </div>

              {/* Derecha: label + contador */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-white/70 text-base whitespace-nowrap">
                  Termina en:
                </span>

                <div className="grid grid-cols-4 gap-3">
                  {timerItems.map((x) => (
                    <div
                      key={x.l}
                      className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-xl px-3 py-2 text-center"
                    >
                      <div className="text-white font-bold text-lg leading-5">
                        {x.v}
                      </div>
                      <div className="text-[11px] text-white/70 leading-3 mt-1">
                        {x.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 max-w-[520px] lg:max-w-none">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              Le damos un estilo <span className="text-teal-400">único</span> a
              tus ideas.
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Diseño gráfico profesional, flyers creativos, videos impactantes,
              logos memorables y arquitectura innovadora. Todo lo que necesitas
              para destacar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Comprar ahora
              </button>

              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                Ver portafolio
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl aspect-[3/2] sm:aspect-[3/4] flex items-center justify-center mb-5 sm:mb-6 group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                <Play
                  className="w-14 h-14 sm:w-16 sm:h-16 text-teal-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Videos</h3>
              <p className="text-white/60 text-sm">Contenido profesional</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl aspect-[3/2] sm:aspect-[3/4] flex items-center justify-center mb-5 sm:mb-6 group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                <Sparkles
                  className="w-14 h-14 sm:w-16 sm:h-16 text-teal-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Diseños</h3>
              <p className="text-white/60 text-sm">Creatividad única</p>
            </div>

            <div className="sm:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group-hover:from-teal-500/30 group-hover:to-teal-600/20 transition-all duration-300">
                  <Target
                    className="w-10 h-10 sm:w-12 sm:h-12 text-teal-400"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-1">
                    Proyectos
                  </h3>
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
