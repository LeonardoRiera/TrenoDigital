import React from "react";
import Slider from "react-slick";
import './Portfolio.css'

import proyecto1 from "../../assets/portfolio/1.png";
import proyecto2 from "../../assets/portfolio/2.png";
import proyecto3 from "../../assets/portfolio/3.png";
import proyecto4 from "../../assets/portfolio/4.png";
import proyecto5 from "../../assets/portfolio/5.png";

function Portfolio() {
  const portfolioImages = [proyecto1, proyecto2, proyecto3, proyecto4, proyecto5];

  const settings = {
    dots: true, // puntos de navegación
    infinite: true, // loop infinito
    speed: 500, // transición 0.5s
    slidesToShow: 1, // mostrar una imagen a la vez
    slidesToScroll: 1,
    arrows: true, // flechas
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // ajusta altura al contenido
    lazyLoad: "ondemand", // opcional: mejora performance
  };

  return (
    <section className="portfolio-slider">
      <Slider {...settings}>
        {portfolioImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Proyecto ${index + 1}`} className="slider-img"/>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;