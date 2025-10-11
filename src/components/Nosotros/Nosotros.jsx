import React from "react";
import "./Nosotros.css";
// import nosotrosImg from "../../assets/nosotros.png";
import Button from '../Boton/Boton';
import logo1 from "../../assets/white-tomate.png";
import logo2 from "../../assets/white-travel.png";
import logo3 from "../../assets/white-astron.png";
import logo4 from "../../assets/white-tracker.png";
import logo5 from "../../assets/white-it.png";
import logo6 from "../../assets/white-profile.png";

const Nosotros = () => {
  return (
    <section className="nosotros">

        {/* Fila de logos */}
      <div className="nosotros-logos">
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo2} alt="Logo cliente 2" className="logo2" />
        <img src={logo3} alt="Logo cliente 3" className="logo3" />
        <img src={logo4} alt="Logo cliente 4" />
        <img src={logo5} alt="Logo cliente 5" className="logo5" />
        <img src={logo6} alt="Logo cliente 6" />
      </div>

      <div
        className="nosotros-hero">
        {/* // style={{ backgroundImage: `url(${nosotrosImg})` }} */}
      
        <h2>Trabajemos juntos en tu <br/> presencia online.</h2>
        <h3>Somos Brenda y Leo. Artistas y desarrolladores web. <br/>
            Fusionamos diseño gráfico y UX/UI para transformar ideas en experiencias digitales.
            {/* </h3> */}
            {/* <h3>Fusionamos diseño gráfico y UX/UI para transformar ideas en experiencias digitales. <br/> */}
            {/*  <span className="span-nosotros">Podemos hacer grandes cosas juntos.</span>  */}
            </h3>
       
        {/* Botón desktop */}
        <div className="navbar-cta">
          <Button
            texto={<> Hablemos de tu Proyecto</>}
            tipo="primario"
            onClick={() => window.open('https://wa.me/tu-numero', '_blank')}
          />
        </div>

        {/* <div>
          <button className="btn secondary">Nuestros Servicios</button>
        </div> */}
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