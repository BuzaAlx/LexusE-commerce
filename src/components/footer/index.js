import "./styles.scss";
import React from "react";
import Button from "../shared/button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer__column contacts">
            <h2>Наші контакти</h2>
            <div className="contacts__box">
              <div className="contacts__info">
                <p>вул. Мечникова, 2а, БЦ «Парус», Київ</p>
                <a href="tel:(044) 290-34-85">(044) 290-34-85</a>
                <a href="mailto:lexus@cityplaza.ua">lexus@cityplaza.ua</a>
              </div>
              <div className="contacts__schedule">
                <p>Режим роботи салону:</p>
                <p>Пн - Нд: 09:00 - 18:00</p>
              </div>
            </div>
            <Button text={"Прокласти маршрут"} />
          </div>
          <div className="footer__column footer_map"></div>
        </div>
      </div>
    </footer>
  );
}
