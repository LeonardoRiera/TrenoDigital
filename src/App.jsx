import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Importamos los componentes base
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Nosotros from './components/Nosotros/Nosotros'
import Servicios from './components/Servicios/Servicios'
import Portfolio from './components/Portfolio/Portfolio'
import Planes from './components/Planes/Planes'
import Footer from './components/Footer/Footer'

import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";


function App() {
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      <Header />
      <Nosotros />
      <Servicios />
      <Portfolio />
      <Planes />
      <Footer />
    </>
  )
}

export default App