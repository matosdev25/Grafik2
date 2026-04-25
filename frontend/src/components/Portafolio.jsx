import React, { memo } from "react";
import { Instagram } from "lucide-react";

const PORTFOLIO_ITEMS = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-1.PNG`, alt: "Diseño gráfico para redes sociales 1" },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-2.PNG`, alt: "Diseño gráfico para redes sociales 2" },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-3.PNG`, alt: "Diseño gráfico para redes sociales 3" },
  { id: 4, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-4.PNG`, alt: "Diseño gráfico para redes sociales 4" },
  { id: 5, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-5.PNG`, alt: "Diseño gráfico para redes sociales 5" },
  { id: 6, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-6.PNG`, alt: "Diseño gráfico para redes sociales 6" },
  { id: 7, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-7.PNG`, alt: "Diseño gráfico para redes sociales 7" },
  { id: 8, image: `${process.env.PUBLIC_URL}/images/portfolio/proyecto-8.PNG`, alt: "Diseño gráfico para redes sociales 8" },
];

const PortfolioCard = memo(function PortfolioCard({ item }) {
  return (
    <article className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm group aspect-[4/5] content-visibility-auto">
      <div className="w-full h-full overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          width="400"
          height="500"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
    </article>
  );
});

const Portafolio = memo(function Portafolio() {
  return (
    <section className="font-gilroy py-20 px-4 content-visibility-section" id="portafolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-queering text-5xl font-bold text-gray-900 mb-4">
            Portafolio
          </h2>
          <p className="text-gray-500 text-lg">Algunos de nuestros trabajos recientes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/grafik2s/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-[1.03] flex items-center gap-2 shadow-md"
            aria-label="Ver más en Instagram"
          >
            <Instagram className="w-5 h-5" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
});

export default Portafolio;
