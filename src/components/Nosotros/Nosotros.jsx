import React from "react";
import "./Nosotros.css";
import nosotrosImg from "../../assets/nosotros.png";
import Button from '../Boton/Boton';
import logo1 from "../../assets/logotravel.png";

const Nosotros = () => {
  return (
    <section className="nosotros">

        {/* Fila de logos */}
      <div className="nosotros-logos">
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo1} alt="Logo cliente 1" />
        
      </div>

      <div
        className="nosotros-hero"
        style={{ backgroundImage: `url(${nosotrosImg})` }}
      >
        <h2>Trabajemos juntos en tu presencia online.</h2>
        <h3>Somos Artistas y diseñadores. Podemos hacer grandes cosas juntos.</h3>
        {/* Botón desktop */}
        <div className="navbar-cta">
          <Button
            texto={<> Nuestros Servicios</>}
            tipo="primario"
            // onClick={() => window.open('https://wa.me/tu-numero', '_blank')}
          />
        </div>
      </div>

        <div className="nosotros-texto-extra">
            <p>
                En Treno Digital reafirmamos el compromiso que nos ha acompañado a lo largo de los años:
                crear, crecer y acompañar a quienes confían en nosotros. Este nuevo proyecto nace del mismo
                espíritu con el que trabajamos siempre — dedicación, constancia y una búsqueda permanente
                de calidad y evolución.
            </p>
        </div>
    </section>
  );
};

export default Nosotros;