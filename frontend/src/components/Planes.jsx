import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  forwardRef,
  memo,
} from "react";
import { planesData } from "../data/planesData";
import PlanModal from "./PlanModal";

const TABS = [
  { id: "combos", label: "Combis" },
  { id: "diseno", label: "Diseño Gráfico" },
  { id: "combiCompleta", label: "Combi Completa" },
  { id: "contenido", label: "Creación de Video" },
  { id: "logo", label: "Logo" },
];

const PlanCard = memo(function PlanCard({ plan, setCardRef, onSelectPlan }) {
  return (
    <div
      ref={setCardRef(plan.id)}
      className={`relative bg-white border rounded-3xl shadow-sm transition-all duration-500 flex flex-col h-full ${
        plan.popular
          ? "border-teal-400 md:scale-105 md:-translate-y-2 z-10 px-8 py-10 min-h-[520px] hover:shadow-lg hover:shadow-teal-500/10 hover:md:scale-[1.08]"
          : "border-gray-200 px-8 py-8 min-h-[480px] hover:shadow-md hover:scale-105"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="bg-teal-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-md shadow-teal-500/20">
            Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-queering text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
        <div className="flex items-end justify-center gap-1">
          <span className="font-queering text-5xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-500 mb-2">{plan.period}</span>
        </div>
      </div>

      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
        <h4 className="text-gray-800 text-xl font-bold mb-3">{plan.subtitle}</h4>
        <p className="text-gray-500 text-sm leading-7 max-w-[240px] mx-auto">{plan.description}</p>
      </div>

      <button
        type="button"
        onClick={() => onSelectPlan(plan)}
        className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-teal-500/20"
      >
        Elegir plan
      </button>
    </div>
  );
});

const Planes = memo(
  forwardRef(function Planes({ selectedPlan, selectedCategory }, ref) {
    const [activeTab, setActiveTab] = useState("diseno");
    const [modalPlan, setModalPlan] = useState(null);
    const cardRefs = useRef({});
    const scrollTimeoutRef = useRef(null);
    const ringTimeoutRef = useRef(null);

    useEffect(() => {
      if (selectedCategory) setActiveTab(selectedCategory);
    }, [selectedCategory]); // intentional: solo reacciona al cambio de prop, no al tab manual

    useEffect(() => {
      if (!selectedPlan) return;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (ringTimeoutRef.current) clearTimeout(ringTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        const card = cardRefs.current[selectedPlan];
        if (!card) return;
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("ring-2", "ring-teal-400", "ring-offset-2", "ring-offset-white");
        ringTimeoutRef.current = setTimeout(() => {
          cardRefs.current[selectedPlan]?.classList.remove(
            "ring-2", "ring-teal-400", "ring-offset-2", "ring-offset-white"
          );
        }, 2000);
      }, 300);

      return () => {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        if (ringTimeoutRef.current) clearTimeout(ringTimeoutRef.current);
      };
    }, [selectedPlan]); // intentional: solo reacciona al cambio de prop

    const plans = useMemo(() => planesData[activeTab] || [], [activeTab]);
    const handleTabChange = useCallback((tabId) => setActiveTab(tabId), []);
    const handleSelectPlan = useCallback((plan) => setModalPlan(plan), []);
    const handleModalClose = useCallback(() => setModalPlan(null), []);

    const setCardRef = useCallback(
      (id) => (el) => {
        if (el) cardRefs.current[id] = el;
        else delete cardRefs.current[id];
      },
      []
    );

    return (
      <section className="font-gilroy py-20 px-4" id="planes" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-queering text-5xl font-bold text-gray-900 mb-4">
              Producción creativa y branding
            </h2>
            <p className="text-gray-500 text-lg">Elige el plan perfecto para tus necesidades</p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 border border-gray-200 rounded-full p-2 inline-flex flex-wrap justify-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {plans.length === 1 ? (
            <div className="flex justify-center mt-8">
              <div className="w-full max-w-sm">
                <PlanCard plan={plans[0]} setCardRef={setCardRef} onSelectPlan={handleSelectPlan} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-8">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} setCardRef={setCardRef} onSelectPlan={handleSelectPlan} />
              ))}
            </div>
          )}
        </div>

        {modalPlan && <PlanModal plan={modalPlan} onClose={handleModalClose} />}
      </section>
    );
  })
);

Planes.displayName = "Planes";

export default Planes;
