import React from "react";
import Button from "../shared/button";
import "./styles.scss";
import descImgb from "../../images/description/description_card1b.png";
import descImga from "../../images/description/description_card1a.png";

export default function Description({ right }) {
  console.log(right);

  return (
    <section className="description description-row">
      <div className="container">
        <div
          className={`description_column ${
            right ? "description_column--right" : ""
          }`}
        >
          <div className="description_row description_text-block">
            <h2 className="description_title">КЕРУЙ АВТОМОБІЛЕМ СВОЄЇ МРІЇ</h2>
            <p className="description_subtitle">
              Запишіться на тест-драйв моделей Lexus. В наявності широкий вибір
              авто: седан, кросовери та позашляховик.
            </p>
            <Button type="black" text={"Замовити тест драйв"} />
          </div>
          <div
            className={`description_row image-overflow ${
              right ? "image-right" : ""
            }`}
          >
            <img src={descImgb} alt="desc_imgb" />
          </div>
        </div>
        <div className="description_column">
          <img src={descImga} alt="desc_imga" />
        </div>
      </div>
    </section>
  );
}
