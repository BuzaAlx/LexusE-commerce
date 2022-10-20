import React from "react";
import "./styles.scss";
import IconMenu from "images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="top-header">
          <div className="top-header__column">
            <div className="top-header__adress">
              <div>Автосалон</div>
              <div>вул. Мечникова, 2а, БЦ «Паруc»</div>
              <div>
                <a href="/">(044) 298 61 26</a>
              </div>
            </div>
            <div className="top-header__adress">
              <div>Сервіс</div>
              <div>Проспект Степана Бандери, 24Б</div>
              <div>
                <a href="/">(044) 298 61 26</a>
              </div>
            </div>
          </div>
          <div className="top-header__column">
            <a href="/" className="btn">
              <span>записатись на тест драйв</span>
            </a>
          </div>
        </div>
        <div className="bottom-header">
          <div className="logo">
            <a href="/">
              <img src={IconMenu} alt="asd" />
            </a>
          </div>
          <nav className="header-navigartion">
            <List />
            <div className="language">
              <span>UA</span>
            </div>
            <div className="compare">
              <span>icon</span>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

function List() {
  return (
    <ul className="header-navigartion__list list">
      <li className="list__element">
        <span>Автомобілі</span>
        <div className="list__submenu">
          <ul>
            <li>
              <span>
                <Link to={"/home/model-list"}> модельний ряд </Link>
              </span>
            </li>
            <li>
              <span>авто з пробігом</span>
            </li>
          </ul>
        </div>
      </li>
      <li className="list__element">
        <span>Сервіс</span>
        <div className="list__submenu">
          <ul>
            <li>
              <span>Програма продовженої гарантії</span>
            </li>
            <li>
              <span>автосервіс</span>
            </li>
            <li>
              <span>технічне обслуговування</span>
            </li>
            <li>
              <span>Відновлювальний ремонт</span>
            </li>
            <li>
              <span>Діагностика та ремонт</span>
            </li>
            <li>
              <span>Запчастини</span>
            </li>
            <li>
              <span>спеціальні пропозиції</span>
            </li>
          </ul>
        </div>
      </li>
      <li className="list__element">
        <span>Послуги</span>
        <div className="list__submenu">
          <ul>
            <li>
              <span>Запис на сервіс</span>
            </li>
            <li>
              <span>Тест драйв</span>
            </li>
            <li>
              <span>Trade-in</span>
            </li>
            <li>
              <span>фінансування</span>
            </li>
            <li>
              <span>Lexus-assistance</span>
            </li>
          </ul>
        </div>
      </li>
      <li>Про нас</li>
      <li>Контакти</li>
    </ul>
  );
}
