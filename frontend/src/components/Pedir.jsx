import React, { useState } from 'react';
import { FileText, Video, Palette, ArrowRight } from 'lucide-react';

const Pedir = () => {
  const [activeTab, setActiveTab] = useState('flyers');

  const tabs = [
    { id: 'flyers', label: 'Flyers', icon: FileText },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'logo', label: 'Logo', icon: Palette }
  ];

  const products = [
    {
      name: 'Flyer Básico',
      description: 'Diseño simple y efectivo para eventos o promociones',
      price: '$25'
    },
    {
      name: 'Flyer Premium',
      description: 'Diseño avanzado con ilustraciones personalizadas',
      price: '$49'
    },
    {
      name: 'Pack 5 Flyers',
      description: '5 diseños únicos para diferentes ocasiones',
      price: '$99'
    }
  ];

  return (
    <section className="py-20 px-4" id="pedir">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Pedir</h2>
          <p className="text-white/70 text-lg">Selecciona el servicio que necesitas</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 inline-flex gap-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">{product.description}</p>
              <p className="text-4xl font-bold text-teal-400 mb-6">{product.price}</p>
              <button className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30">
                Ordenar ahora
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Ir a Pedir
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pedir;
