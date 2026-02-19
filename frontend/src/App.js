import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Planes from './components/Planes';
import Pedir from './components/Pedir';
import Arquitectura from './components/Arquitectura';
import Portafolio from './components/Portafolio';
import Metricas from './components/Metricas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Metricas />
      <Planes />
      <Pedir />
      <Arquitectura />
      <Portafolio />
      <Contacto />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
