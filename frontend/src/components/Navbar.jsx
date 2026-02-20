import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dropdownData = {
    planes: [
      { id: "basico", label: "Plan Básico", category: "diseno", plan: "basico" },
      { id: "pro", label: "Plan Pro", category: "diseno", plan: "profesional" },
      { id: "premium", label: "Plan Premium", category: "diseno", plan: "empresarial" },
    ],
    pedir: [
      { id: "flyers", label: "Flyers", tab: "flyers" },
      { id: "video", label: "Video", tab: "video" },
      { id: "logo", label: "Logo", tab: "logo" },
    ],
    arquitectura: [
      { id: "planos", label: "Planos", section: "arquitectura" },
      { id: "renders", label: "Renders", section: "arquitectura" },
    ],
  };

  const handleMouseEnter = (dropdown) => {
    if (isMobile) return;
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 160);
  };

  const handleClick = (dropdown) => {
    if (!isMobile) return;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMenuItemClick = (item, section) => {
    setActiveDropdown(null);
    if (onNavigate) onNavigate(section, item);
  };

  const handleKeyDown = (e, dropdown) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  const DropdownMenu = ({ items, section, isOpen }) => {
    return (
      <div
        className={[
          "absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px]",
          "bg-black/75 backdrop-blur-xl border border-white/10",
          "rounded-2xl shadow-2xl shadow-black/60 py-2 z-50",
          "origin-top transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-1 scale-[0.98] pointer-events-none",
        ].join(" ")}
        onMouseEnter={() => handleMouseEnter(section)}
        onMouseLeave={handleMouseLeave}
        role="menu"
        aria-label={`${section}-menu`}
      >
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <button
              type="button"
              onClick={() => handleMenuItemClick(item, section)}
              className="w-full text-left px-4 py-3 text-white/95 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
              role="menuitem"
            >
              {item.label}
            </button>

            {index < items.length - 1 && <div className="mx-2 border-t border-white/10" />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] px-4">
      <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/20">
        <div className="px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="GRAFIK2"
              className="h-5 w-5 object-contain"
            />
            <span className="text-white font-bold text-lg tracking-tight">GRAFIK2®</span>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <a
              href="#quienes-somos"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              ¿Quiénes somos?
            </a>

            {/* Planes Dropdown */}
            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("planes")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => handleClick("planes")}
                onKeyDown={(e) => handleKeyDown(e, "planes")}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "planes"}
              >
                Planes
                <ChevronDown className="w-4 h-4" />
              </button>

              <DropdownMenu
                items={dropdownData.planes}
                section="planes"
                isOpen={activeDropdown === "planes"}
              />
            </div>

            {/* Pedir Dropdown */}
            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("pedir")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => handleClick("pedir")}
                onKeyDown={(e) => handleKeyDown(e, "pedir")}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "pedir"}
              >
                Pedir
                <ChevronDown className="w-4 h-4" />
              </button>

              <DropdownMenu
                items={dropdownData.pedir}
                section="pedir"
                isOpen={activeDropdown === "pedir"}
              />
            </div>

            {/* Arquitectura Dropdown */}
            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("arquitectura")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => handleClick("arquitectura")}
                onKeyDown={(e) => handleKeyDown(e, "arquitectura")}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "arquitectura"}
              >
                Arquitectura
                <ChevronDown className="w-4 h-4" />
              </button>

              <DropdownMenu
                items={dropdownData.arquitectura}
                section="arquitectura"
                isOpen={activeDropdown === "arquitectura"}
              />
            </div>
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
