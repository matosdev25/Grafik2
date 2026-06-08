import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const DROPDOWN_DATA = {
  planes: [
    { id: "combos", label: "Planes en Combo", category: "combos", plan: "combimediana" },
    { id: "diseno", label: "Planes para Flyers", category: "diseno", plan: "gmedia" },
    { id: "combiCompleta", label: "Manejo de Redes", category: "combiCompleta", plan: "combicompleta" },
    { id: "contenido", label: "Planes de Video", category: "contenido", plan: "mediamovie" },
    { id: "logo", label: "Logos", category: "logo", plan: "logobasico" },
  ],
  pedir: [
    { id: "flyers", label: "Flyers", tab: "flyers" },
    { id: "video", label: "Video", tab: "video" },
  ],
  render: [
    { id: "render", label: "Render", section: "arquitectura" },
    { id: "modelados", label: "Renders y Modelados 3D", section: "arquitectura" },
    { id: "modelados3d", label: "Modelados 3D", section: "arquitectura" },
  ],
};

const TRACKED_SECTIONS = ["planes", "pedir", "arquitectura", "eventos", "portafolio", "contacto"];

const DesktopDropdownMenu = memo(function DesktopDropdownMenu({
  items,
  section,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) {
  return (
    <div
      className={[
        "absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px]",
        "bg-white border border-gray-200",
        "rounded-2xl shadow-xl py-2 z-50",
        "origin-top transition-all duration-300 ease-out",
        isOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-1 scale-[0.98] pointer-events-none",
      ].join(" ")}
      onMouseEnter={() => onMouseEnter(section)}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-label={`${section}-menu`}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <button
            type="button"
            onClick={() => onItemClick(item, section)}
            className="w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors text-sm font-medium"
            role="menuitem"
          >
            {item.label}
          </button>
          {index < items.length - 1 && (
            <div className="mx-2 border-t border-gray-100" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
});

const MobileDropdownInline = memo(function MobileDropdownInline({
  items,
  section,
  isOpen,
  onItemClick,
}) {
  if (!isOpen) return null;

  return (
    <div className="mt-2 space-y-1 rounded-xl bg-gray-50 border border-gray-200 p-2">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onItemClick(item, section)}
          className="w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
});

const Navbar = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const handleMediaChange = (event) => setIsMobile(event.matches);
    setIsMobile(mediaQuery.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  }, [isMobile]);

  useEffect(() => {
    const observers = [];

    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = useCallback((id) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleMouseEnter = useCallback(
    (dropdown) => {
      if (isMobile) return;
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      setActiveDropdown(dropdown);
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 160);
  }, [isMobile]);

  const handleClick = useCallback(
    (dropdown) => {
      if (!isMobile) return;
      setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
    },
    [isMobile]
  );

  const handleMenuItemClick = useCallback(
    (item, section) => {
      setActiveDropdown(null);
      setIsMenuOpen(false);
      if (onNavigate) onNavigate(section, item);
    },
    [onNavigate]
  );

  const toggleMobileMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const navLink = (section) =>
    `text-[13px] font-medium transition-colors whitespace-nowrap ${
      activeSection === section ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }`;

  const dropdownTrigger = (section) =>
    `flex items-center gap-1 text-[13px] font-medium transition-colors whitespace-nowrap ${
      activeSection === section ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
    }`;

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-3">
      <nav className="font-gilroy bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl lg:rounded-full shadow-sm shadow-gray-200/80">
        <div className="px-5 py-3 lg:px-8 lg:py-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 min-w-0"
            aria-label="Ir al inicio"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo1.png`}
              alt="GRAFIK2"
              className="h-6 w-6 object-contain"
            />
            <span className="font-queering text-gray-900 font-bold text-lg tracking-tight whitespace-nowrap">
              GRAFIK2®
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("quienes-somos")}
              className={navLink(null)}
            >
              ¿Quiénes somos?
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("portafolio")}
              className={navLink("portafolio")}
            >
              Portafolio
            </button>

            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("planes")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={dropdownTrigger("planes")}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "planes"}
              >
                Producción <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <DesktopDropdownMenu
                items={DROPDOWN_DATA.planes}
                section="planes"
                isOpen={activeDropdown === "planes"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onItemClick={handleMenuItemClick}
              />
            </div>

            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("pedir")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={dropdownTrigger("pedir")}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "pedir"}
              >
                Pedir <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <DesktopDropdownMenu
                items={DROPDOWN_DATA.pedir}
                section="pedir"
                isOpen={activeDropdown === "pedir"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onItemClick={handleMenuItemClick}
              />
            </div>

            <div
              className="relative z-50"
              onMouseEnter={() => handleMouseEnter("render")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={dropdownTrigger("arquitectura")}
                aria-haspopup="menu"
                aria-expanded={activeDropdown === "render"}
              >
                Render 3D <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <DesktopDropdownMenu
                items={DROPDOWN_DATA.render}
                section="render"
                isOpen={activeDropdown === "render"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onItemClick={handleMenuItemClick}
              />
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("eventos")}
              className={navLink("eventos")}
            >
              Eventos
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-teal-500/20 whitespace-nowrap"
            >
              CONTÁCTENOS
            </a>

            <button
              type="button"
              className="lg:hidden bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 h-10 w-10 rounded-xl flex items-center justify-center transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden px-5 pb-4">
            <div className="mt-2 space-y-3">
              <button
                type="button"
                className="block w-full text-left text-gray-700 hover:text-teal-600 text-sm font-medium"
                onClick={() => scrollToSection("quienes-somos")}
              >
                ¿Quiénes somos?
              </button>

              <button
                type="button"
                className="block w-full text-left text-gray-700 hover:text-teal-600 text-sm font-medium"
                onClick={() => scrollToSection("portafolio")}
              >
                Portafolio
              </button>

              <div>
                <button
                  type="button"
                  onClick={() => handleClick("planes")}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-teal-600 text-sm font-medium"
                >
                  <span>Producción creativa y branding</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "planes" ? "rotate-180" : ""}`} />
                </button>
                <MobileDropdownInline
                  items={DROPDOWN_DATA.planes}
                  section="planes"
                  isOpen={activeDropdown === "planes"}
                  onItemClick={handleMenuItemClick}
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleClick("pedir")}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-teal-600 text-sm font-medium"
                >
                  <span>Pedir</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "pedir" ? "rotate-180" : ""}`} />
                </button>
                <MobileDropdownInline
                  items={DROPDOWN_DATA.pedir}
                  section="pedir"
                  isOpen={activeDropdown === "pedir"}
                  onItemClick={handleMenuItemClick}
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleClick("render")}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-teal-600 text-sm font-medium"
                >
                  <span>Render y Modelados 3D</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "render" ? "rotate-180" : ""}`} />
                </button>
                <MobileDropdownInline
                  items={DROPDOWN_DATA.render}
                  section="render"
                  isOpen={activeDropdown === "render"}
                  onItemClick={handleMenuItemClick}
                />
              </div>

              <button
                type="button"
                className="block w-full text-left text-gray-700 hover:text-teal-600 text-sm font-medium"
                onClick={() => scrollToSection("eventos")}
              >
                Eventos
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                CONTÁCTENOS
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default memo(Navbar);
