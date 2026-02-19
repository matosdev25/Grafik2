import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const Metricas = () => {
  const metrics = [
    {
      icon: TrendingUp,
      number: '500+',
      label: 'Proyectos terminados'
    },
    {
      icon: Users,
      number: '250+',
      label: 'Clientes satisfechos'
    },
    {
      icon: Award,
      number: '8+',
      label: 'Años de experiencia'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-16 h-16 text-teal-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-6xl font-bold text-white mb-4">{metric.number}</h3>
                <p className="text-white/70 text-lg">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metricas;
