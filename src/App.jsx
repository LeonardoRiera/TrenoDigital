import React from 'react'
import './App.css'

// Importamos los componentes base
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Nosotros from './components/Nosotros/Nosotros'
import Servicios from './components/Servicios/Servicios'
// import Portfolio from './components/Portfolio'
// import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Nosotros />
      <Servicios />
      {/* <Portfolio /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App