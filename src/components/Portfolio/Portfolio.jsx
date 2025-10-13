import React from "react";
import Slider from "react-slick";
import './Portfolio.css'

import proyecto1 from "../../assets/portfolio/1.png";
import proyecto2 from "../../assets/portfolio/2.png";
import proyecto3 from "../../assets/portfolio/3.png";
import proyecto4 from "../../assets/portfolio/4.png";
import proyecto5 from "../../assets/portfolio/5.png";

// Flechas personalizadas vacías para eliminar tooltips
const PrevArrow = (props) => {
  const { onClick } = props;
  return <button className="slick-prev" onClick={onClick} />;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <button className="slick-next" onClick={onClick} />;
};

function Portfolio() {
  const portfolioImages = [proyecto1, proyecto2, proyecto3, proyecto4, proyecto5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    swipe: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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