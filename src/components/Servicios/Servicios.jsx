import React from 'react';
import './Servicios.css';
import equipo from "../../assets/moodboard.png"; // tu imagen de fondo
import logonav from "../../assets/logonav.png"; // tu icono

function Servicios() {
  return (
    <section className="servicios" id="servicios">
      {/* Título principal */}
      <h2 className="servicios-title">Lo que hacemos</h2>

      {/* Contenedor de columnas */}
      <div className="servicios-container">
        {/* Diseño Web */}
        <div className="servicio-card">
          <h3>Diseño Web</h3>
          <p>
            Sitios funcionales y visuales que reflejan la identidad de tu marca.
            Landing pages, portfolios y tiendas online adaptadas a cada necesidad.
          </p>
        </div>

        {/* Branding */}
        <div className="servicio-card bordered">
          <h3>Branding</h3>
          <p>
            Construimos y fortalecemos tu marca. Logotipos, identidad visual y
            materiales gráficos coherentes para potenciar tu presencia.
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="servicio-card">
          <h3>Redes Sociales</h3>
          <p>
            Estrategia y diseño de contenido visual. Packs para feeds, stories y
            anuncios que comunican con estilo y consistencia.
          </p>
        </div>
      </div>

      <section className="nosotros-mensaje">
      <div className="columna-imagen">
        <img src={equipo} alt="Equipo creativo" />
      </div>

      <div className="columna-texto">
        <p className="mensaje-texto">
          Creemos en el trabajo bien hecho, en los proyectos que crecen paso a paso, 
          y en acompañar a cada cliente con compromiso real.  
          <br />
          <strong>Tu marca también puede transformarse en una historia sólida y visible.</strong>
        </p>
        
      </div>
        </section>

        {/* Nuevo row de planes con precios */}
<div className="planes-container">
  {/* Diseño Web */}
  <div className="plan-card">
    <h3>Diseño Web</h3>
    <img src={logonav} alt="Icono Diseño Web" className="plan-icon" />
    <p>Landing pages, portfolios y tiendas online adaptadas a tu marca.</p>
    <hr/>
    <p className="precio">Planes desde: $30.000</p>
  </div>

  {/* Branding */}
  <div className="plan-card">
    <h3>Branding</h3>
    <img src={logonav} alt="Icono Diseño Web" className="plan-icon" />
    <p>Construcción de logotipos e identidad visual coherente para tu marca.</p>
    <hr/>
    <p className="precio">Planes desde: $30.000</p>
  </div>

  {/* Redes Sociales */}
  <div className="plan-card">
    <h3>Redes Sociales</h3>
    <img src={logonav} alt="Icono Diseño Web" className="plan-icon" />
    <p>Estrategia y diseño de contenido visual para feeds, stories y anuncios.</p>
    <hr/>
    <p className="precio">Planes desde: $30.000</p>
  </div>
</div>

<div className='cta-servicios'>
    <h2>¿Tenés Una idea en mente? Consultá sin cargo y descubrí cómo podemos ayudarte a hacerla realidad.</h2>
    <h3>Hablemos por WhatsApp!</h3>
</div>

    </section>

  );
}

export default Servicios;