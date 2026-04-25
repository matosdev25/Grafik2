import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  forwardRef,
  memo,
} from "react";
import { FileText, Video } from "lucide-react";
import { pedirData } from "../data/pedirData";
import PlanModal from "./PlanModal";

const TABS = [
  { id: "flyers", label: "Flyers", icon: FileText },
  { id: "video", label: "Video", icon: Video },
];

const ProductCard = memo(function ProductCard({ product, index, onSelectProduct }) {
  const isHorizontal = product.layout === "horizontal";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-[1.02] flex h-full ${
        isHorizontal ? "flex-row items-center gap-6" : "flex-col"
      }`}
      style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}
    >
      {isHorizontal ? (
        <>
          <div className="flex-1 min-w-0">
            <h3 className="font-queering text-2xl font-bold text-gray-900 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="font-queering text-4xl font-bold text-teal-500 mb-4">
              {product.price}
            </p>
            <button
              type="button"
              onClick={() => onSelectProduct(product)}
              className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20 whitespace-nowrap"
            >
              Ordenar ahora
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-queering text-2xl font-bold text-gray-900 mb-3">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">
            {product.description}
          </p>
          <p className="font-queering text-4xl font-bold text-teal-500 mb-6">
            {product.price}
          </p>
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="mt-auto w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20"
          >
            Ordenar ahora
          </button>
        </>
      )}
    </div>
  );
});

const Pedir = memo(
  forwardRef(function Pedir({ selectedTab: initialTab }, ref) {
    const [activeTab, setActiveTab] = useState("flyers");
    const [modalProduct, setModalProduct] = useState(null);

    useEffect(() => {
      if (initialTab) setActiveTab(initialTab);
    }, [initialTab]); // intentional: solo reacciona al cambio de prop

    const products = useMemo(() => pedirData[activeTab] || [], [activeTab]);
    const handleTabChange = useCallback((tabId) => setActiveTab(tabId), []);
    const handleSelectProduct = useCallback((product) => setModalProduct(product), []);
    const handleModalClose = useCallback(() => setModalProduct(null), []);

    const hasLayoutVariants = products.some((p) => p.layout);

    return (
      <section className="font-gilroy py-20 px-4 bg-gray-50" id="pedir" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-queering text-5xl font-bold text-gray-900 mb-4">
              Pedir
            </h2>
            <p className="text-gray-500 text-lg">Selecciona el servicio que necesitas</p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-gray-100 border border-gray-200 rounded-full p-2 inline-flex gap-2">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`grid gap-8 items-stretch ${
              hasLayoutVariants
                ? "grid-cols-1 md:grid-cols-3"
                : products.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={product.layout === "horizontal" ? "md:col-span-2" : ""}
              >
                <ProductCard product={product} index={index} onSelectProduct={handleSelectProduct} />
              </div>
            ))}
          </div>
        </div>

        {modalProduct && <PlanModal plan={modalProduct} onClose={handleModalClose} />}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    );
  })
);

Pedir.displayName = "Pedir";

export default Pedir;
