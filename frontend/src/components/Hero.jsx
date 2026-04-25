import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import { MessageCircle, Eye, Target } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import slide1 from "../assets/design/design-1.png";
import slide2 from "../assets/design/design-2.png";
import slide3 from "../assets/design/design-3.png";
import slide4 from "../assets/design/design-4.png";
import slide5 from "../assets/design/design-5.png";

const HERO_VIDEO_SRC = "/videos/hero-video.mp4";

const DESIGN_SLIDES = [slide1, slide2, slide3, slide4, slide5];

const getNextMonthStart = (from = new Date()) =>
  new Date(from.getFullYear(), from.getMonth() + 1, 1, 0, 0, 0, 0);

const msToParts = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const CountdownItem = memo(function CountdownItem({ value, label, desktop = false }) {
  return (
    <div className="bg-teal-50 border border-teal-200 rounded-xl px-3 py-2 text-center">
      <div className="text-teal-700 font-bold text-lg leading-5">{value}</div>
      <div className={`${desktop ? "text-[11px]" : "text-[10px]"} text-gray-500 leading-3 mt-1`}>
        {label}
      </div>
    </div>
  );
});

const OfferBanner = memo(function OfferBanner() {
  const targetRef = useRef(getNextMonthStart());
  const [timeLeft, setTimeLeft] = useState(() => msToParts(targetRef.current - new Date()));

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

  const timerItems = useMemo(
    () => [
      { v: String(timeLeft.days).padStart(2, "0"), l: "DÍAS" },
      { v: String(timeLeft.hours).padStart(2, "0"), l: "HRS" },
      { v: String(timeLeft.minutes).padStart(2, "0"), l: "MIN" },
      { v: String(timeLeft.seconds).padStart(2, "0"), l: "SEG" },
    ],
    [timeLeft]
  );

  return (
    <div className="mb-10 lg:mb-16 flex justify-center">
      <div className="w-full max-w-[520px] sm:max-w-2xl lg:max-w-[980px] bg-gray-50 border border-gray-200 rounded-2xl lg:rounded-full px-4 py-4 sm:px-6 lg:px-8 lg:py-4 shadow-sm">
        <div className="lg:hidden">
          <div className="space-y-1 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">🔥</span>
              <span className="font-queering font-bold text-gray-900 text-sm sm:text-base">
                Oferta Especial:
              </span>
            </div>
            <div className="text-gray-700 text-sm sm:text-base font-medium">
              ¡20% de descuento en todos los planes!
            </div>
            <div className="text-gray-500 text-sm sm:text-base">Termina en:</div>
          </div>
          <div className="mt-3 flex justify-center">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 w-full">
              {timerItems.map((x) => (
                <CountdownItem key={x.l} value={x.v} label={x.l} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span className="text-xl">🔥</span>
            <span className="text-gray-700 text-base font-medium min-w-0 truncate whitespace-nowrap">
              <span className="font-queering font-bold text-gray-900">Oferta Especial:</span>{" "}
              ¡20% de descuento en todos los planes!
            </span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-gray-500 text-base whitespace-nowrap">Termina en:</span>
            <div className="grid grid-cols-4 gap-3">
              {timerItems.map((x) => (
                <CountdownItem key={x.l} value={x.v} label={x.l} desktop />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const HeroVideo = memo(function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-teal-50 rounded-2xl aspect-[3/2] sm:aspect-[3/4] overflow-hidden mb-5 sm:mb-6">
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
});

const HeroDesignSlider = memo(function HeroDesignSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tickKey, setTickKey] = useState(0);

  const goTo = useCallback((i) => {
    setCurrent(i);
    setTickKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % DESIGN_SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused, tickKey]);

  return (
    <div
      className="bg-teal-50 rounded-2xl aspect-[3/2] sm:aspect-[3/4] overflow-hidden mb-5 sm:mb-6 relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Galería de diseños"
    >
      {DESIGN_SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Diseño ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {DESIGN_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Imagen ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-4 h-1.5"
                : "bg-white/50 w-1.5 h-1.5 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

const HeroCards = memo(function HeroCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition group">
        <HeroVideo />
        <h3 className="text-gray-900 font-bold text-xl mb-2">Videos</h3>
        <p className="text-gray-500 text-sm">Contenido profesional</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition group">
        <HeroDesignSlider />
        <h3 className="text-gray-900 font-bold text-xl mb-2">Diseños</h3>
        <p className="text-gray-500 text-sm">Creatividad única</p>
      </div>

      <div className="sm:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition group">
        <div className="flex items-center gap-5 sm:gap-6">
          <div className="bg-teal-50 rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center group-hover:bg-teal-100 transition flex-shrink-0">
            <Target className="w-10 h-10 sm:w-12 sm:h-12 text-teal-500" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-2xl mb-1">Proyectos</h3>
            <p className="text-gray-500">+500 trabajos completados</p>
          </div>
        </div>
      </div>
    </div>
  );
});

const Hero = () => {
  const handleScrollToPortfolio = useCallback(() => {
    const section = document.getElementById("portafolio");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="font-gilroy pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <OfferBanner />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 max-w-[520px] lg:max-w-none">
            <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              Transformamos ideas en{" "}
              <span className="text-teal-500">experiencias</span> visuales que conectan.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Ofrecemos diseño gráfico, producción audiovisual, renders y modelado 3D,
              combinando creatividad y estrategia en cada proyecto.
            </p>

            <p className="text-gray-500 text-base leading-relaxed">
              También llevamos tu marca al siguiente nivel con planificación, cobertura
              de eventos y soluciones visuales adaptadas a lo que necesites.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctenos
              </a>

              <button
                type="button"
                onClick={handleScrollToPortfolio}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Ver portafolio
              </button>
            </div>
          </div>

          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
