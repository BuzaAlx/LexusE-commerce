import React from "react";
import Card from "../card";
import NewCard from "../newcard";
import "./styles.scss";

export default function CardList() {
  return (
    <section className="model-list">
      <div className="container">
        <div className="model-list__row">
          <h2>Модельний ряд</h2>
          <a href="/">
            <span> дивитись всі моделі</span>
          </a>
        </div>
        <div className="cards-container">
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <NewCard />
        </div>
        <section className="description">
          <p>
            Ціни включають податок на додану вартість, без врахування доплати за
            колір («металік», «перламутр», тощо), вартості додаткових опцій та
            спеціальних акцій, пропозицій, які можуть діяти на момент придбання
            автомобіля. Наявність, вартість та точні характеристики автомобіля
            уточнюйте у Вашого консультанта Лексус Сіті Плаза за номером
            телефону <a href="tel:(044) 499-40-09">(044) 499-40-09</a> або
            відвідайте нас за адресою: м. Київ, вул. Мечникова, 2А.
          </p>
          <p>
            Ціни вказані на автомобілі, які знаходяться на території України,
            станом на 21.02.2022 р. Розміщена на цій сторінці інформація щодо
            характеристик і цін продукції може бути не остаточною і підлягає
            уточненню у дилерському центрі Лексус Сіті Плаза. Така інформація не
            є пропозицією укласти договір (офертою).
          </p>
        </section>
      </div>
    </section>
  );
}
