import React from 'react';
import './Servicios.css';
import equipo from "../../assets/moodboard.png"; // tu imagen de fondo
import logonav from "../../assets/logonav.png"; // tu icono
import icono1 from '../../assets/icons/siembra-manual.png';
import icono2 from '../../assets/icons/navegador-de-experiencia.png';
import icono3 from '../../assets/icons/almuerzo-cohete.png';
import icono4 from '../../assets/icons/megafono-mundial.png';
import Faja from "../Faja/Faja";

function Servicios() {
  return (
    <section className="servicios" id="servicios">
      {/* Título principal */}
      <img src={icono1} alt="mano que sostiene un brote" className='icono-brote'/>
      <h2 className="servicios-title">Lo que hacemos</h2>

      {/* Contenedor de columnas */}
      <div className="servicios-container">
        {/* Diseño Web */}
        <div className="servicio-card">
          <img src={icono2} alt="mano que sostiene un brote" className='icono-card-chica'/>
          <h3>Diseño y Desarrollo Web</h3>
          <p>
            Creamos sitios web funcionales, modernos y adaptados a la identidad de cada proyecto. 
            Desde landings efectivas hasta portfolios profesionales o artísticos, cuidamos cada detalle para que tu 
            presencia digital destaque y comunique.
          </p>
        </div>

        {/* Branding */}
        <div className="servicio-card bordered">
          <img src={icono3} alt="mano que sostiene un brote" className='icono-card-chica'/>
          <h3>Branding</h3>
          <p>
            Construimos y fortalecemos la identidad de tu marca desde el principio.
            Creamos logotipos, paletas de color y recursos que te ayuden a profesionalizar tu proyecto.
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="servicio-card">
          <img src={icono4} alt="mano que sostiene un brote" className='icono-card-chica'/>
          <h3>Redes Sociales y Eventos</h3>
          <p>
            Diseñamos contenido visual para redes sociales, lanzamientos y eventos.
            Material gráfico para comunicar con estilo y coherencia, potenciando la identidad de tu marca en cada publicación o presentación.
          </p>
        </div>
      </div>
      
        
    </section>

  );
}

export default Servicios;



