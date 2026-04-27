import React, { memo } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const BRAND_NAME = "GRAFIK2®";
const BRAND_TEXT = "Transformamos tus ideas en diseños únicos y memorables.";

const SERVICES = [
  "Diseño Gráfico",
  "Creación de Videos",
  "Logos",
  "Render y Modelados 3D",
  "Eventos",
];

const QUICK_LINKS = [
  { id: "quienes", label: "¿Quiénes somos?", href: "#quienes-somos" },
  { id: "planes", label: "Producción", href: "#planes" },
  { id: "portafolio", label: "Portafolio", href: "#portafolio" },
  { id: "pedir", label: "Pedir", href: "#pedir" },
  { id: "eventos", label: "Eventos", href: "#eventos" },
];

const EMAIL = "grafik2@gmail.com";
const PHONE = "+507 6628-1656";

const SOCIAL_LINKS = [
  { id: "instagram", icon: Instagram, href: "https://www.instagram.com/grafik2s/", label: "Instagram" },
  { id: "tiktok", icon: SiTiktok, href: "https://www.tiktok.com/@grafik2s", label: "TikTok" },
];

const Footer = memo(function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/logo1.png`}
                alt={BRAND_NAME}
                className="h-6 w-6 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="font-queering text-gray-900 font-bold text-xl tracking-tight">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">{BRAND_TEXT}</p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-queering text-gray-900 font-bold text-lg mb-4">Servicios</h3>
              <ul className="space-y-2 sm:space-y-3">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-queering text-gray-900 font-bold text-lg mb-4">
                Enlaces rápidos
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className="text-gray-500 hover:text-teal-600 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-queering text-gray-900 font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-3 mb-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-teal-500 border border-gray-200 hover:border-teal-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {Icon === SiTiktok ? (
                      <Icon size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                    ) : (
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-500">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{EMAIL}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{PHONE}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 {BRAND_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
