import React, { memo } from "react";
import { CalendarDays } from "lucide-react";

const Eventos = memo(function Eventos() {
  return (
    <section className="font-gilroy py-20 px-4 bg-gray-50" id="eventos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-queering text-5xl font-bold text-gray-900 mb-4">
            Eventos
          </h2>
          <p className="text-gray-500 text-lg">
            Cobertura y producción profesional de eventos
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl px-12 py-16 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-50 rounded-2xl mb-6">
              <CalendarDays className="w-10 h-10 text-teal-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-queering text-3xl font-bold text-gray-900 mb-3">
              Próximamente
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Estamos preparando algo especial. Mantente al tanto de nuestros nuevos
              servicios de cobertura de eventos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Eventos;
