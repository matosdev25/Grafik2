import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Planes = () => {
  const [activeTab, setActiveTab] = useState('diseno');

  const tabs = [
    { id: 'diseno', label: 'Diseño Gráfico' },
    { id: 'videos', label: 'Creación de Videos' },
    { id: 'combos', label: 'Combos completas' }
  ];

  const plans = [
    {
      name: 'Básico',
      price: '$49',
      period: '/mes',
      features: [
        '5 diseños mensuales',
        'Entrega en 48 horas',
        'Revisiones ilimitadas',
        'Formatos digitales'
      ],
      popular: false
    },
    {
      name: 'Profesional',
      price: '$99',
      period: '/mes',
      features: [
        '15 diseños mensuales',
        'Entrega en 24 horas',
        'Revisiones ilimitadas',
        'Todos los formatos',
        'Soporte prioritario'
      ],
      popular: true
    },
    {
      name: 'Empresarial',
      price: '$199',
      period: '/mes',
      features: [
        'Diseños ilimitados',
        'Entrega en 12 horas',
        'Revisiones ilimitadas',
        'Todos los formatos',
        'Gerente dedicado',
        'Branding completo'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4" id="planes">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Planes</h2>
          <p className="text-white/70 text-lg">Elige el plan perfecto para tus necesidades</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 inline-flex gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-teal-400/50' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-teal-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/30">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30">
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
