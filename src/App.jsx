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
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Nosotros />
      <Servicios />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App