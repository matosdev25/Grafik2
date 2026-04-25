import React, { useState, useCallback, memo } from "react";
import { MessageSquare, Instagram, Mail, Clock } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const INITIAL_FORM_DATA = {
  nombre: "",
  whatsapp: "",
  servicio: "",
  mensaje: "",
};

const CONTACT_METHODS = [
  { id: "whatsapp", icon: MessageSquare, label: "WhatsApp", value: "+507 6628-1656" },
  { id: "instagram", icon: Instagram, label: "Instagram", value: "@grafik2s" },
  { id: "email", icon: Mail, label: "Email", value: "grafik2pty@gmail.com" },
];

const SCHEDULE = [
  { id: "lunes-viernes", day: "Lunes – Viernes", hours: "8:00 AM – 10:00 PM" },
  { id: "sabado", day: "Sábado", hours: "10:00 AM – 5:00 PM" },
  { id: "domingo", day: "Domingo", hours: "Cerrado" },
];

const ContactMethodsCard = memo(function ContactMethodsCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      <h3 className="font-queering text-2xl font-bold text-gray-900 mb-6">
        Otros métodos de contacto
      </h3>
      <div className="bg-gray-50 rounded-2xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
        {CONTACT_METHODS.map((method) => {
          const Icon = method.icon;
          return (
            <div
              key={method.id}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 transition-colors"
            >
              <Icon className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div className="leading-tight">
                <p className="text-gray-500 text-sm">{method.label}</p>
                <p className="text-gray-900 font-medium">{method.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

const ScheduleCard = memo(function ScheduleCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-teal-500" />
        <h3 className="font-queering text-2xl font-bold text-gray-900">
          Horario de atención
        </h3>
      </div>
      <div className="bg-gray-50 rounded-2xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
        {SCHEDULE.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 hover:bg-gray-100 transition-colors"
          >
            <span className="text-gray-600">{item.day}</span>
            <span className="text-gray-900 font-medium">{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

const Contacto = memo(function Contacto() {
  const { toast } = useToast();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo pronto." });
      setFormData(INITIAL_FORM_DATA);
    },
    [toast]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const processed = name === "whatsapp" ? value.replace(/\D/g, "").slice(0, 8) : value;
    setFormData((prev) => ({ ...prev, [name]: processed }));
  }, []);

  return (
    <section className="font-gilroy py-20 px-4 bg-gray-50" id="contacto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-queering text-5xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-gray-500 text-lg">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="font-queering text-2xl font-bold text-gray-900 mb-6">
              Enviar mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">WhatsApp</label>
                <div className="flex rounded-xl overflow-hidden border border-gray-300 focus-within:border-teal-500 transition-colors bg-gray-50">
                  <span className="flex items-center px-4 py-3 bg-gray-100 text-gray-600 text-sm font-medium border-r border-gray-300 select-none">
                    +507
                  </span>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    inputMode="numeric"
                    maxLength={8}
                    pattern="[0-9]{8}"
                    placeholder="0000 0000"
                    required
                    className="flex-1 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">Servicio</label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="diseno">Diseño Gráfico</option>
                  <option value="video">Creación de Videos</option>
                  <option value="render3d">Render y Modelados 3D</option>
                  <option value="logo">Logos</option>
                  <option value="eventos">Eventos</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-teal-500/20"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <ContactMethodsCard />
            <ScheduleCard />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contacto;
