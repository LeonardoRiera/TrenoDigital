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
import nosotros from "../../assets/nosotros.webp";

const Nosotros = () => {
  return (
    <section className="nosotros" id="nosotros">

        {/* Fila de logos */}
      <div className="nosotros-logos">
        <img src={logo1} alt="Logo cliente 1" />
        <img src={logo2} alt="Logo cliente 2" className="logo2" />
        <img src={logo3} alt="Logo cliente 3" className="logo3" />
        <img src={logo4} alt="Logo cliente 4" />
        <img src={logo5} alt="Logo cliente 5" className="logo5" />
        <img src={logo6} alt="Logo cliente 6" />
      </div>

      <div className="nosotros-hero">
        <div className="card-text">
          <h2 className="titulo-card">Trabajemos juntos en tu presencia online.</h2>
          <h3>Somos Brenda y Leo, desarrolladores y diseñadores UX/UI. <br/>
              Creamos experiencias digitales que impulsan proyectos en el mundo real. {/* <br/>
             <span className="span-nosotros"> Cuando tu presencia online refleja tu esencia, los resultados se ven en el mundo real.</span> */} </h3> 

          <Button
            texto={<> Hablemos de tu Proyecto</>}
            tipo="secundario"
            onClick={() => window.open('https://wa.me/5492964455088', '_blank')}
            className="about-button"
          />
         
        </div>
        
        <img src={nosotros} alt="nosotros" className="nosotros-img" />
 
      </div>

      {/* <div className="nosotros-texto-extra">
          <p>
              En Treno Digital reafirmamos el compromiso que nos ha acompañado a lo largo de los años:
              crear, crecer y acompañar a quienes confían en nosotros. Este nuevo proyecto nace del mismo
              espíritu con el que trabajamos siempre — dedicación, constancia y una búsqueda permanente
              de calidad y evolución.
          </p>
      </div> */}
    </section>
  );
};




export default Nosotros;