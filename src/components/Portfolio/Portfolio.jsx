import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Portfolio.css";

// 🔹 Importá tus 5 imágenes para cada medida
import desktop1 from "../../assets/portfolio/1.png";
import desktop2 from "../../assets/portfolio/2.png";
import desktop3 from "../../assets/portfolio/3.png";
import desktop4 from "../../assets/portfolio/2.png";
import desktop5 from "../../assets/portfolio/1.png";

import mobile1 from "../../assets/portfolio/mobile1.png";
import mobile2 from "../../assets/portfolio/mobile2.png";
import mobile3 from "../../assets/portfolio/mobile3.png";
import mobile4 from "../../assets/portfolio/mobile2.png";
import mobile5 from "../../assets/portfolio/mobile1.png";

// 🔹 Flechas personalizadas (sin tooltips)
const PrevArrow = ({ onClick }) => <button className="slick-prev" onClick={onClick} />;
const NextArrow = ({ onClick }) => <button className="slick-next" onClick={onClick} />;

function Portfolio() {
  const [portfolioImages, setPortfolioImages] = useState([]);

  const desktopImgs = [desktop1, desktop2, desktop3, desktop4, desktop5];
  const mobileImgs = [mobile1, mobile2, mobile3, mobile4, mobile5];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPortfolioImages(mobileImgs); // 📱 Móvil
      } else {
        setPortfolioImages(desktopImgs); // 💻 Escritorio
      }
    };

    handleResize(); // ✅ Ejecuta al montar el componente
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="portfolio-slider" id="portfolio">
      <div className="portfolio-titulo">
        <h2>Nuestros Trabajos</h2>
      </div>
      <Slider {...settings}>
        {portfolioImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Proyecto ${index + 1}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;
