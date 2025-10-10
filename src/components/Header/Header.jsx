import React from 'react';
import logo from '../../assets/logo-boton.png';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className='header-cont'>
        {/* Primer row */}
        <div className="header-top row">
          <div className="header-logo col">
            <img src={logo} alt="Treno Digital" />
          </div>
          <div className="header-title col">
            <h1>Diseño Web, <br/> Branding y Diseño Gráfico <br /> para Redes Sociales</h1>
          </div>
        </div>

        {/* Segundo row: subtítulos */}
        <div className="header-subtitles row">
          <h2>Somos Treno Digital. Tu agencia de diseño y desarrollo web</h2>
          <h2>La imagen profesional que tu proyecto Necesita.</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;