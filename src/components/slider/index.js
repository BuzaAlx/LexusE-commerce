import React, { useState, useEffect } from "react";
import posed, { PoseGroup } from "react-pose";
import { list } from "../slider-prev_DELETE/list";
import Button from "../shared/button";
import "./styles.scss";

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 50,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const But = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    default: { duration: 300 },
  },
});

export default function Slider() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    let nextSlide = index ? index : currentSlide + 1;
    nextSlide === list.length ? (nextSlide = 0) : null;
    setIsVisible(false);
    setCurrentSlide(nextSlide);
    let tim = setTimeout(function () {
      setIsVisible(true);
    }, 700);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <>
      <div className="wrapper">
        <PoseGroup>
          {isVisible && [
            <Shade
              key="shade"
              className="slide-container slide"
              style={{
                background: `url(${list[currentSlide].image}) center center / cover no-repeat `,
                backgroundSize: "cover",
              }}
            >
              <Modal key="modal" className="slide__inner">
                <h2 className="slide__tittle">{list[currentSlide].tittle}</h2>
                <p className="slide__subtitle">{list[currentSlide].subtitle}</p>
                <But key="button">
                  <Button text={list[currentSlide].buttonText} />
                </But>
              </Modal>
            </Shade>,
          ]}
        </PoseGroup>
        <div className="slider-pagination">
          {list.map((_, i) => {
            let clas =
              i === currentSlide ? "slider-pagination-bullet-active" : "";
            return (
              <span onClick={() => changeSlide(i)} className={clas}>
                {i + 1}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
