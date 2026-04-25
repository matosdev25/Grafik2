import React, { memo } from "react";
import { TrendingUp, Users, Award } from "lucide-react";

const METRICS = [
  { id: "proyectos", icon: TrendingUp, number: "500+", label: "Proyectos terminados" },
  { id: "clientes", icon: Users, number: "250+", label: "Clientes satisfechos" },
  { id: "experiencia", icon: Award, number: "8+", label: "Años de experiencia" },
];

const MetricCard = memo(function MetricCard({ metric }) {
  const Icon = metric.icon;

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm hover:shadow-md transition-all duration-300 group text-center">
      <div className="flex justify-center mb-6">
        <Icon
          className="w-16 h-16 text-teal-500 group-hover:scale-110 transition-transform duration-300"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="font-queering text-6xl font-bold text-gray-900 mb-4">
        {metric.number}
      </h3>
      <p className="text-gray-500 text-lg">{metric.label}</p>
    </div>
  );
});

const Metricas = memo(function Metricas() {
  return (
    <section className="font-gilroy py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Metricas;
