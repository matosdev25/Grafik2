import React, { forwardRef } from 'react';
import { Building2, Gem } from 'lucide-react';

const Arquitectura = forwardRef((props, ref) => {
  const services = [
    {
      icon: Building2,
      title: 'Planos',
      description: 'Diseño arquitectónico completo con especificaciones técnicas detalladas y planos profesionales.',
      chips: ['Planos 2D', 'Especificaciones', 'Permisos', 'Revisiones']
    },
    {
      icon: Gem,
      title: 'Renders',
      description: 'Visualizaciones 3D fotorrealistas que dan vida a tus proyectos antes de construir.',
      chips: ['Renders 3D', 'Fotorrealismo', '360° Tours', 'Animaciones']
    }
  ];

  return (
    <section className="py-20 px-4" id="arquitectura" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Arquitectura</h2>
          <p className="text-white/70 text-lg">Soluciones arquitectónicas profesionales</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  <Icon className="w-16 h-16 text-teal-400" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 text-base mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Chips */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.chips.map((chip, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center text-white/80 text-sm font-medium"
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30">
                  Ver detalles
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Arquitectura.displayName = 'Arquitectura';

export default Arquitectura;
