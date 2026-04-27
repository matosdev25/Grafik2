import React, { forwardRef, memo } from "react";
import { Monitor, Layers, Box } from "lucide-react";

const SERVICES = [
  {
    id: "modelados3d",
    icon: Box,
    title: "Modelado 3D",
    description:
      "Creación de modelos 3D de alta precisión para arquitectura, producto y animación.",
    chips: ["Alta precisión", "Arquitectura", "Producto", "Animación"],
  },
  {
    id: "render",
    icon: Monitor,
    title: "Renders",
    description:
      "Visualizaciones 3D fotorrealistas que dan vida a tus proyectos con calidad cinematográfica.",
    chips: ["Renders 3D", "Fotorrealismo", "360° Tours", "Animaciones"],
  },
  {
    id: "modelados",
    icon: Layers,
    title: "Combo: Modelado 3D + Renders",
    description:
      "Modelado tridimensional completo con texturas, materiales y acabados profesionales.",
    chips: ["Modelado 3D", "Texturas", "Materiales", "Exportación"],
  },
];

const ServiceCard = memo(function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
      <div className="mb-6">
        <Icon className="w-16 h-16 text-teal-500" strokeWidth={1.5} />
      </div>

      <h3 className="font-queering text-3xl font-bold text-gray-900 mb-4">
        {service.title}
      </h3>

      <p className="text-gray-500 text-base mb-8 leading-relaxed">
        {service.description}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {service.chips.map((chip) => (
          <div
            key={chip}
            className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-center text-gray-700 text-sm font-medium"
          >
            {chip}
          </div>
        ))}
      </div>

      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-teal-500/20">
        Ver detalles
      </button>
    </div>
  );
});

const Arquitectura = memo(
  forwardRef(function Arquitectura(props, ref) {
    return (
      <section className="font-gilroy py-20 px-4" id="arquitectura" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-queering text-5xl font-bold text-gray-900 mb-4">
              Render y Modelados 3D
            </h2>
            <p className="text-gray-500 text-lg">
              Visualizaciones y modelados tridimensionales profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    );
  })
);

Arquitectura.displayName = "Arquitectura";

export default Arquitectura;
