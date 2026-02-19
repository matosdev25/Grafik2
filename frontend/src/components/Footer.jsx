import React from 'react';
import { MapPin, Instagram, Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const services = [
    'Diseño Gráfico',
    'Creación de Videos',
    'Logos',
    'Arquitectura'
  ];

  const quickLinks = [
    '¿Quiénes somos?',
    'Planes',
    'Portafolio',
    'Pedir'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-teal-400" strokeWidth={2.5} />
              <span className="text-white font-bold text-xl tracking-tight">GRAFIK2®</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Transformamos tus ideas en diseños únicos y memorables.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/5 hover:bg-teal-500 border border-white/10 hover:border-teal-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contacto@grafik2.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 234 567 8900</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            © 2026 GRAFIK2®. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
