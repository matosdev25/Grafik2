import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { Check } from 'lucide-react';
import { planesData } from '../data/planesData';

const Planes = forwardRef(({ selectedPlan, selectedCategory }, ref) => {
  const [activeTab, setActiveTab] = useState('diseno');
  const cardRefs = useRef({});

  const tabs = [
    { id: 'diseno', label: 'Diseño Gráfico' },
    { id: 'videos', label: 'Creación de Videos' },
    { id: 'combos', label: 'Combos completas' }
  ];

  useEffect(() => {
    if (selectedCategory && selectedCategory !== activeTab) {
      setActiveTab(selectedCategory);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedPlan && cardRefs.current[selectedPlan]) {
      setTimeout(() => {
        cardRefs.current[selectedPlan].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        
        // Highlight effect
        cardRefs.current[selectedPlan].classList.add('ring-2', 'ring-teal-400', 'ring-offset-2', 'ring-offset-transparent');
        setTimeout(() => {
          cardRefs.current[selectedPlan]?.classList.remove('ring-2', 'ring-teal-400', 'ring-offset-2', 'ring-offset-transparent');
        }, 2000);
      }, 300);
    }
  }, [selectedPlan, activeTab]);

  const plans = planesData[activeTab] || [];

  return (
    <section className="py-20 px-4" id="planes" ref={ref}>
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
              key={plan.id}
              ref={el => cardRefs.current[plan.id] = el}
              className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 shadow-2xl shadow-black/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
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
});

Planes.displayName = 'Planes';

export default Planes;
