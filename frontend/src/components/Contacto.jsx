import React, { useState } from 'react';
import { MessageSquare, Instagram, Mail, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    servicio: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Mensaje enviado',
      description: 'Nos pondremos en contacto contigo pronto.'
    });
    setFormData({ nombre: '', whatsapp: '', servicio: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    { icon: MessageSquare, label: 'WhatsApp', value: '+1 234 567 8900' },
    { icon: Instagram, label: 'Instagram', value: '@grafik2oficial' },
    { icon: Mail, label: 'Email', value: 'contacto@grafik2.com' }
  ];

  const schedule = [
    { day: 'Lunes – Viernes', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sábado', hours: '10:00 AM - 2:00 PM' },
    { day: 'Domingo', hours: 'Cerrado' }
  ];

  return (
    <section className="py-20 px-4" id="contacto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-white/70 text-lg">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-6">Enviar mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-teal-400/50 focus:outline-none transition-colors"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-teal-400/50 focus:outline-none transition-colors"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Servicio</label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-400/50 focus:outline-none transition-colors"
                  required
                >
                  <option value="" className="bg-gray-900">Selecciona un servicio</option>
                  <option value="diseno" className="bg-gray-900">Diseño Gráfico</option>
                  <option value="video" className="bg-gray-900">Creación de Videos</option>
                  <option value="arquitectura" className="bg-gray-900">Arquitectura</option>
                  <option value="logo" className="bg-gray-900">Logos</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-teal-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-400 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Info & Schedule */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-bold text-white mb-6">Otros métodos de contacto</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-teal-400" />
                      <div>
                        <p className="text-white/60 text-sm">{method.label}</p>
                        <p className="text-white font-medium">{method.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">Horario de atención</h3>
              </div>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-white/70">{item.day}</span>
                    <span className="text-white font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
