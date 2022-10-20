import React, { useEffect } from "react";
import "./styles.scss";

import lazyImage from "../../images/card/picture.png";
import lazyImageThumb from "../../images/card/thumb-lazy.png";

import smallWebL from "../../images/card/540.webp";
import mediumWebL from "../../images/card/768.webp";
import largeWebL from "../../images/card/1280.webp";
import ELargeWebL from "../../images/card/1920.webp";

import smallPng from "../../images/card/540.png";
import mediumPng from "../../images/card/768.png";
import largePng from "../../images/card/1280.png";
import ELargePng from "../../images/card/1920.png";
import useOnScreen from "../../hooks/useOnScreen";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

export default function Card() {
  const { pathname } = useLocation();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const isVisible = useOnScreen(containerRef);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [isLoaded, isVisible]);

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="card" ref={containerRef}>
        <div className="card__row">
          <h3 className="card__name">rx</h3>
          <p className="card__price">від 2 277 104 грн</p>
        </div>
        <div className="card__image-wrapper lazy-image">
          <div className="lazy-image__trigger" />
          <div
            className={`lazy-image__overlay ${
              isLoaded ? "lazy-image__overlay--hidden" : ""
            }`}
          >
            <img
              className="lazy-image__overlay-thumb"
              src={lazyImageThumb}
              alt="lazy-image-thumb"
            />
          </div>
          {(isVisible || isLoaded) && (
            <picture className="lazy-image__picture">
              <source
                srcSet={`${smallWebL} 540w, ${mediumWebL} 768w, ${largeWebL} 1280w, ${ELargeWebL} 1920w`}
              />
              <source
                srcSet={`${smallPng} 540w, ${mediumPng} 768w, ${largePng} 1280w, ${ELargePng} 1920w`}
              />
              <img
                className="lazy-image__img"
                src={lazyImage}
                alt="lazy-img"
                ref={imageRef}
              />
            </picture>
          )}
        </div>
        <div className="card__submenu">
          <ul>
            <li>
              <Link to={`/home/model-list/rx/e-250`}>rx e-250</Link>
            </li>
            <li>
              <Link to={`/home/model-list/nx/z-200`}>nx z-200</Link>
            </li>
            <li>
              <Link to={`/home/model-list/es/u-150`}>es u-150</Link>
            </li>
            <li>
              <Link to={`${pathname}/es/u-150`}>es u-150</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
