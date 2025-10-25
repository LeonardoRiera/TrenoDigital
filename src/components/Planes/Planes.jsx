import React from "react";
import icono2 from "../../assets/icons/navegador-de-experiencia.png";
import icono3 from "../../assets/icons/almuerzo-cohete.png";
import icono4 from "../../assets/icons/megafono-mundial.png";
import icono5 from "../../assets/icons/beneficio.png";
import "./Planes.css";
import Faja from "../Faja/Faja";

const planesData = [
  
  {
    titulo: "Diseño para Redes y Eventos",
    icono: icono4,
    descripcion:
      "Contenido visual para redes sociales, lanzamientos, promociones y eventos.",
    detalles: [
      "Plan Campaña Puntual — paquete de piezas gráficas para una promoción o evento.",
      "Plan Presencia Activa — diseño mensual adaptable a distintos formatos.",
    ],
    precio: "$20.000",
  },
  {
    titulo: "Diseño y Desarrollo Web",
    icono: icono2,
    descripcion: "Sitios funcionales y visuales que se adaptan a cada proyecto.",
    detalles: [
      "Landing Page — ideal para campañas o presentaciones.",
      "One Page — todo tu contenido en una sola página.",
      "Portfolio Profesional — para mostrar tus proyectos o servicios.",
      "Portfolio Artístico — para artistas, fotógrafos y creativos.",
      "Sitio Completo / SPA — dinámico y personalizado para marcas consolidadas.",
    ],
    precio: "$150.000",
  },
  {
    titulo: "Branding para Emprendedores",
    icono: icono3,
    descripcion: "Identidades visuales coherentes y memorables.",
    detalles: [
      "Plan Emprendedor — logotipo, paleta de color y tipografía base.",
      "Plan Completo — sistema visual integral con guía de marca y aplicaciones gráficas.",
    ],
    precio: "$60.000",
  },
  
];

const Planes = () => {
  return (
    <section className="planes-section" id="planes">
      <div className="planes-titulo-row">
        <h2 className="planes-titulo">
          Cuando tu presencia online refleja tu esencia, los resultados se ven en el mundo real.
        </h2>
        <img src={icono5} alt="mano que sostiene una corona" className='icono-corona'/>
        <h3 className="planes-subtitulo">
          Conocé las Ofertas que tenemos para vos.
        </h3>

      </div>

      <div className="planes-container">
        {planesData.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3>{plan.titulo}</h3>
            <img
              src={plan.icono}
              alt={`Icono ${plan.titulo}`}
              className="plan-icon"
            />
            <p className="plan-descripcion">{plan.descripcion}</p>

            <ul className="plan-lista">
              {plan.detalles.map((detalle, i) => (
                <li key={i}>{detalle}</li>
              ))}
            </ul>

            <hr />
            <p className="precio">Planes desde: {plan.precio}</p>
          </div>
        ))}
      </div>
      <div className="row-pre-footer">

        {/* <div className="pre-footer-contenedor">
          <h3>Diseño.</h3>
          <h3>Creatividad.</h3>
          <h3>Innovación.</h3>
        </div> */}
        <Faja />
        

      </div>
    </section>
  );
};

export default Planes;