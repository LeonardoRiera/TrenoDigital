import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import "./Faja.css";

const Faja = () => {
  const { t } = useTranslation();

  return (
    <section className="faja-portfolio" role="presentation">
      <div className="faja-container">
        <Marquee
          direction="left"
          speed={70}
          gradient={false}
          /* pauseOnHover */
          className="marquee"
        >
          <span className="marquee-item">{t("Creatividad")}</span>
          <span className="dot">•</span>
          <span className="marquee-item">{t("Innovación")}</span>
          <span className="dot">•</span>
          <span className="marquee-item">{t("Diseño")}</span>
          <span className="dot">•</span>
        </Marquee>
      </div>
    </section>
  );
};

export default Faja;