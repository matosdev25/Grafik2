import React, { useRef, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Planes from "./components/Planes";
import Pedir from "./components/Pedir";
import Arquitectura from "./components/Arquitectura";
import Portafolio from "./components/Portafolio";
import Metricas from "./components/Metricas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function HomePage() {
  const planesRef = useRef(null);
  const pedirRef = useRef(null);
  const arquitecturaRef = useRef(null);

  const [planesState, setPlanesState] = useState({ selectedPlan: null, selectedCategory: null });
  const [pedirState, setPedirState] = useState({ selectedTab: null });

  const handleNavigate = (section, item) => {
    if (section === "planes") {
      setPlanesState({ selectedPlan: item.plan, selectedCategory: item.category });
      setTimeout(() => planesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } else if (section === "pedir") {
      setPedirState({ selectedTab: item.tab });
      setTimeout(() => pedirRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } else if (section === "arquitectura") {
      setTimeout(() => arquitecturaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      <Hero />
      <Metricas />
      <Planes
        ref={planesRef}
        selectedPlan={planesState.selectedPlan}
        selectedCategory={planesState.selectedCategory}
      />
      <Pedir ref={pedirRef} selectedTab={pedirState.selectedTab} />
      <Arquitectura ref={arquitecturaRef} />
      <Portafolio />
      <Contacto />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
