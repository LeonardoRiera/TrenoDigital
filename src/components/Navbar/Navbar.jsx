import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import Button from '../Boton/Boton';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <img src={logo} alt="Treno Digital" />
        </div>

        <div className="navbar-hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          
        </ul>

        {/* Botón desktop */}
        <div className="navbar-cta">
          <Button
            texto={<> WhatsApp</>}
            tipo="primario"
            onClick={() => window.open('https://wa.me/tu-numero', '_blank')}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;