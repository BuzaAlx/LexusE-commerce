import React from "react";
import Layout from "../../components/layout";
import Button from "../../components/shared/button";
import headerImage from "../../images/modelPage/top-mainImage.png";
import redCarSideImage from "../../images/modelPage/side-redImage.png";
import galerey_1 from "../../images/modelPage/galerey_1.jpg";
import galerey_2 from "../../images/modelPage/galerey_2.jpg";
import galerey_3 from "../../images/modelPage/galerey_3.jpg";
import "./styles.scss";
import { BsSpeedometer } from "react-icons/bs";
import { TbEngine, TbGasStation } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useState } from "react";

const colorPalette = [
  { id: 1, color: "#BE1728" },
  { id: 2, color: "#000000" },
  { id: 3, color: "#CDA13F" },
  { id: 4, color: "#44281D" },
  { id: 5, color: "#363B3D" },
];

export default function Model() {
  const [selectedColorId, setSelectedColorId] = useState(1);
  const { series, model } = useParams();
  console.log(selectedColorId);
  return (
    <main className="main-model">
      <nav className="model__navigation navigation-wrapper">
        <ul className="navigation">
          <li className="navigation-item active">
            <a href="/">Загальна інформація</a>
          </li>
          <li className="navigation-item">
            <a href="/">Комплектації</a>
          </li>
          <li className="navigation-item">
            <a href="/">Галерея</a>
          </li>
        </ul>
      </nav>
      <section className="model__preview">
        <div className="model__preview-description">
          <h1 className="model__title">Lexus LC </h1>
          <strong className="model__secondary-title">Початок нової ери</strong>
          <p className="model__subtitle">
            З випуском розкішного купе LC 500 для Lexus починається нова ера, в
            основі якої лежить революційний підхід до розробки автомобілів.
            Підготовка моделі LC до виробництва булу немісліма без творчих
            рішень і кардинально нових концепцій.
          </p>
          <Button text={"Взяти на тест драйв"} type="black" />
        </div>
        <div className="model__preview-image">
          <div className="model__header-image">
            <img src={headerImage} alt="lexus LC" />
          </div>
        </div>
      </section>
      <section className="model__configuration">
        <h2 className="model__section-title">Комплектації та характеристики</h2>
        <ul className="configuration-list">
          <li className="configuration-list__item configuration-list__item--active">
            <a href="/">
              <b>Lexus LC 500 </b>
              <span>Luxury</span>
            </a>
          </li>
          <li className="configuration-list__item">
            <a href="/">
              <b>Lexus LC 500</b>
              <span>Sport</span>
            </a>
          </li>
          <li className="configuration-list__item">
            <a href="/">
              <b>Lexus LC 500</b>
              <span>Sport +</span>
            </a>
          </li>
          <li className="configuration-list__item">
            <a href="/">
              <b>Lexus LC 500</b>
              <span>YellowEdition</span>
            </a>
          </li>
        </ul>
        <div className="model__info">
          <div className="model__description">
            <ul className="model__description-list">
              <li className="model__description-item">
                <span>
                  20-дюймові легкосплавні диски, шини 245/45 R20 (передні) +
                  275/40 R20 (задні)
                </span>
              </li>
              <li className="model__description-item">
                <span>Панорамний скляний дах</span>
              </li>
              <li className="model__description-item">
                <span>Оздоблення сидінь шкірою</span>
              </li>
              <li className="model__description-item">
                <span>
                  Передні сидіння з електроприводом регулювання положення за
                  10-ма параметрами для водія та пасажира, з запам’ятовувальним
                  пристроєм для сидіння водія
                </span>
              </li>
              <li className="model__description-item">
                <span>Система іонізації повітря у салоні nanoe®</span>
              </li>
            </ul>
            <button className="model__more-info-button">
              Всі характеристики
            </button>
          </div>
          <div className="model__image-box">
            <img
              className="model__image-box-image"
              src={redCarSideImage}
              alt="lexus LC black"
            />
            <div className="model__color-picker">
              {colorPalette.map((el) => (
                <button
                  onClick={() => setSelectedColorId(el.id)}
                  key={el.id}
                  className="model-color"
                  style={{
                    background: `linear-gradient(68deg, ${el.color} 65%, #fffdfd 100%)`,
                  }}
                ></button>
              ))}

              {/* <button className="model-color"></button>
              <button className="model-color"></button>
              <button className="model-color"></button>
              <button className="model-color"></button> */}
            </div>
          </div>
          <div className="model__shortcut">
            <div className="model__shortcut-info">
              <div className="model__shortcut-info-top">
                <BsSpeedometer size={30} />
                <b>4.7 сек</b>
              </div>
              <div className="model__shortcut-info-bottom">
                Розгін від 0 до 100 км / год
              </div>
            </div>

            <div className="model__shortcut-info">
              <div className="model__shortcut-info-top">
                <TbEngine size={30} />
                <b>467 к/c</b>
              </div>
              <div className="model__shortcut-info-bottom">
                5-літровий восьмициліндровий двигун
              </div>
            </div>

            <div className="model__shortcut-info">
              <div className="model__shortcut-info-top">
                <TbGasStation size={30} />
                <b>11.5 л</b>
              </div>
              <div className="model__shortcut-info-bottom">
                Витрата палива на 100 км
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="model__galery">
        <h2 className="model__section-title">Галерея LC</h2>
        <div className="model__galery-row">
          <img src={galerey_1} alt="galery" />
          <p className="model__galery-row-text">
            За кожною фотографією стоїть своя історія. Розпочніть вашу подорож в
            захоплюючий світ сміливого дизайну і приголомшуючої майстерності
            Lexus.
          </p>
        </div>
        <div className="model__galery-row">
          <div className="model__galery-column">
            <h3 className="model__galery-title">
              Розгляньте Lexus LC з усіх боків
            </h3>
            <img src={galerey_2} alt="galery2" />
          </div>
          <div className="model__galery-column">
            <h3 className="model__galery-title">
              Дізнайтеся більше про інтер'єр Lexus LC
            </h3>
            <img src={galerey_3} alt="galery3" />
          </div>
        </div>
        <Button type="black" text={"взяти на тест драйв"} />
      </section>
    </main>
  );
}
