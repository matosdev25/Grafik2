import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] px-4">
      <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20">
        <div className="px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-400" strokeWidth={2.5} />
            <span className="text-white font-bold text-lg tracking-tight">GRAFIK2®</span>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <a href="#quienes-somos" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              ¿Quiénes somos?
            </a>
            <button className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors">
              Planes
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors">
              Pedir
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors">
              Arquitectura
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* CTA Button */}
          <button className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30">
            CONTÁCTENOS
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
