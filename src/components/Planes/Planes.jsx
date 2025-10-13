import React from "react";
import icono2 from "../../assets/icons/navegador-de-experiencia.png"; // ajusta la ruta según tu proyecto
import icono3 from "../../assets/icons/almuerzo-cohete.png";
import icono4 from "../../assets/icons/megafono-mundial.png";
import "./Planes.css";

const planesData = [
  {
    titulo: "Diseño Web",
    descripcion: "Landing pages, portfolios y tiendas online adaptadas a tu marca.",
    precio: "$30.000",
    icono: icono2,
  },
  {
    titulo: "Branding",
    descripcion: "Construcción de logotipos e identidad visual coherente para tu marca.",
    precio: "$30.000",
    icono: icono3,
  },
  {
    titulo: "Redes Sociales",
    descripcion: "Estrategia y diseño de contenido visual para feeds, stories y anuncios.",
    precio: "$30.000",
    icono: icono4,
  },
];

const Planes = () => {
  return (
    <section className="planes-section">
      {/* Row del título */}
      <div className="planes-titulo-row">
        <h2 className="planes-titulo">
          Cuando tu presencia online refleja tu esencia, los resultados se ven en el mundo real.
        </h2>
      </div>

      {/* Row de las cards */}
      <div className="planes-container">
        {planesData.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3>{plan.titulo}</h3>
            <img src={plan.icono} alt={`Icono ${plan.titulo}`} className="plan-icon" />
            <p>{plan.descripcion}</p>
            <hr/>
            <p className="precio">Planes desde: {plan.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Planes;