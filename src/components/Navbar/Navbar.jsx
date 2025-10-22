import React, { useState, useEffect } from 'react'; // 👈 agregado useEffect
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import Button from '../Boton/Boton';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // 👈 nuevo estado

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80; // compensar altura del navbar
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave a una sección por id
  const handleScroll = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* LOGO: vuelve al top */}
        <div
          className="navbar-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuOpen(false);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMenuOpen(false);
            }
          }}
        >
          <img src={logo} alt="Treno Digital" />
        </div>

        <div className="navbar-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#nosotros"
              onClick={(e) => handleScroll(e, '#nosotros')}
              className={activeSection === 'nosotros' ? 'active' : ''}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              onClick={(e) => handleScroll(e, '#servicios')}
              className={activeSection === 'servicios' ? 'active' : ''}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={(e) => handleScroll(e, '#portfolio')}
              className={activeSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#planes"
              onClick={(e) => handleScroll(e, '#planes')}
              className={activeSection === 'planes' ? 'active' : ''}
            >
              Planes
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleScroll(e, '#contacto')}
              className={activeSection === 'contacto' ? 'active' : ''}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón desktop */}
        <div className="navbar-cta">
          <Button
            texto={<> WhatsApp</>}
            tipo="primario"
            onClick={() => window.open('https://wa.me/5492964455088', '_blank')}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 