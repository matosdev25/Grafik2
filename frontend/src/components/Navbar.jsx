import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

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
    // En móvil, toggle dropdown inline
    if (!isMobile) return;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMenuItemClick = (item, section) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    if (onNavigate) onNavigate(section, item);
  };

  const DesktopDropdownMenu = ({ items, section, isOpen }) => {
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

  const MobileDropdownInline = ({ items, section, isOpen }) => {
    if (!isOpen) return null;
    return (
      <div className="mt-2 space-y-1 rounded-xl bg-white/5 border border-white/10 p-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleMenuItemClick(item, section)}
            className="w-full text-left px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] px-3">
      <nav className="font-gilroy bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-full shadow-2xl shadow-black/20">
        <div className="px-5 py-3 lg:px-8 lg:py-4 flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="GRAFIK2"
              className="h-6 w-6 object-contain"
            />
            <span className="font-queering text-white font-bold text-lg tracking-tight whitespace-nowrap">
              GRAFIK2®
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#quienes-somos"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              ¿Quiénes somos?
            </a>

            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("planes")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "planes"}
              >
                Planes <ChevronDown className="w-4 h-4" />
              </button>
              <DesktopDropdownMenu
                items={dropdownData.planes}
                section="planes"
                isOpen={activeDropdown === "planes"}
              />
            </div>

            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("pedir")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "pedir"}
              >
                Pedir <ChevronDown className="w-4 h-4" />
              </button>
              <DesktopDropdownMenu
                items={dropdownData.pedir}
                section="pedir"
                isOpen={activeDropdown === "pedir"}
              />
            </div>

            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("arquitectura")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => {}}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "arquitectura"}
              >
                Arquitectura <ChevronDown className="w-4 h-4" />
              </button>
              <DesktopDropdownMenu
                items={dropdownData.arquitectura}
                section="arquitectura"
                isOpen={activeDropdown === "arquitectura"}
              />
            </div>
          </div>

          {/* Right side: CTA desktop + menu button mobile */}
          <div className="flex items-center gap-2">
            <button className="hidden lg:inline-flex bg-teal-500 hover:bg-teal-400 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30">
              CONTÁCTENOS
            </button>

            <button
              type="button"
              className="lg:hidden bg-white/5 hover:bg-white/10 border border-white/10 text-white h-10 w-10 rounded-xl flex items-center justify-center"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden px-5 pb-4">
            <div className="mt-2 space-y-3">
              <a
                href="#quienes-somos"
                className="block text-white/90 hover:text-white text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ¿Quiénes somos?
              </a>

              <div>
                <button
                  type="button"
                  onClick={() => handleClick("planes")}
                  className="w-full flex items-center justify-between text-white/90 hover:text-white text-sm font-medium"
                >
                  <span>Planes</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "planes" ? "rotate-180" : ""}`} />
                </button>
                <MobileDropdownInline items={dropdownData.planes} section="planes" isOpen={activeDropdown === "planes"} />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleClick("pedir")}
                  className="w-full flex items-center justify-between text-white/90 hover:text-white text-sm font-medium"
                >
                  <span>Pedir</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "pedir" ? "rotate-180" : ""}`} />
                </button>
                <MobileDropdownInline items={dropdownData.pedir} section="pedir" isOpen={activeDropdown === "pedir"} />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleClick("arquitectura")}
                  className="w-full flex items-center justify-between text-white/90 hover:text-white text-sm font-medium"
                >
                  <span>Arquitectura</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "arquitectura" ? "rotate-180" : ""}`} />
                </button>
                <MobileDropdownInline items={dropdownData.arquitectura} section="arquitectura" isOpen={activeDropdown === "arquitectura"} />
              </div>

              <button className="w-full bg-teal-500 hover:bg-teal-400 text-white py-3 rounded-xl font-semibold text-sm">
                CONTÁCTENOS
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
