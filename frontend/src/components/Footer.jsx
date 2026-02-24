import React from "react";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  // === Tus textos (edita SOLO esto) ===
  const brandName = "GRAFIK2®";
  const brandText = "Transformamos tus ideas en diseños únicos y memorables.";

  const services = ["Diseño Gráfico", "Creación de Videos", "Logos", "Arquitectura"];

  const quickLinks = [
    { label: "¿Quiénes somos?", href: "#quienes-somos" },
    { label: "Planes", href: "#planes" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Pedir", href: "#pedir" },
  ];

  const email = "grafik2@gmail.com";
  const phone = "+507 6228-1656";

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/grafik2s/" },
    { icon: SiTiktok, href: "https://www.tiktok.com/@grafik2s" },
  ];

  return (
    <footer className="py-12 sm:py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal: 1 col en móvil, 4 en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                alt={brandName}
                className="h-6 w-6 object-contain"
              />
              <span className="font-queering text-white font-bold text-xl tracking-tight">
                {brandName}
              </span>
            </div>

            <p className="text-white/60 leading-relaxed">{brandText}</p>
          </div>

          {/* Servicios + Enlaces: 2 columnas en móvil, ocupa 2 columnas en desktop */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Servicios */}
            <div>
              <h3 className="font-queering text-white font-bold text-lg mb-4">
                Servicios
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-teal-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="font-queering text-white font-bold text-lg mb-4">
                Enlaces rápidos
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h3 className="font-queering text-white font-bold text-lg mb-4">
              Síguenos
            </h3>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/5 hover:bg-teal-500 border border-white/10 hover:border-teal-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="social"
                  >
                    {Icon === SiTiktok ? (
                      <Icon size={20} className="text-white" />
                    ) : (
                      <Icon className="w-5 h-5 text-white" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{email}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            © 2026 {brandName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
