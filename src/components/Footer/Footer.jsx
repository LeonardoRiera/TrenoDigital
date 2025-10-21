import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-boton.png";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        
        {/* Columna 1: Logo y descripción */}
        <div className="footer-col">
          <img src={logo} alt="Treno Digital" className="footer-logo" />
          <p className="footer-description">
            Agencia de diseño y desarrollo web. Creamos experiencias digitales
            modernas para marcas que quieren destacar.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="footer-col">
          <h4>Explora</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes */}
        <div className="footer-col">
          <h4>Conectemos</h4>
          <div className="footer-socials">
            <a href="https://www.instagram.com/vinaluzph/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:trenodigital@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Treno Digital <br/> Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
