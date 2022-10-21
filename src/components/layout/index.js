import React from "react";
import "./styles.scss";
import IconMenu from "images/logo.png";
import {
  AiOutlineCar,
  AiOutlineSliders,
  AiFillPhone,
  AiOutlineSearch,
} from "react-icons/ai";
// import { Link } from "react-router-dom";
import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { id: 1, name: "Модельний ряд", link: "/home/model-list" },
  { id: 2, name: "Послуги", link: "/home/poslugi" },
  { id: 3, name: "Сервіс", link: "/home/servis" },
  { id: 4, name: "Салон", link: "/home/salon" },
  { id: 5, name: "Контакти", link: "/home/contacts" },
];

export default function Layout() {
  let { pathname } = useLocation();
  const current = pathname.split("/")[2];

  return (
    <div className="main-wrapper ">
      <div className="container-wide">
        <div className="column">
          <div className="sidebar">
            <ul>
              <li>
                <a href="/">
                  <AiOutlineSearch size={30} />
                  <span>Пошук</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineCar size={30} />
                  <span>Пошук</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineSliders size={30} />
                  <span>Пошук</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillPhone size={30} />
                  <span>Пошук</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <header className="header-top">
            <div className="logo">
              <a href="/">
                <img src={IconMenu} alt="asd" />
              </a>
            </div>
            <ul className="header-top__navigation navigation">
              {navLinks.map((el) => (
                <li
                  key={el.id}
                  className={`navigation-item ${
                    el.link.split("/")[2] === current ? "active" : ""
                  }`}
                >
                  <Link to={el.link}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </header>
          <Outlet />
          <footer>
            <div className="footer-contacts">
              <div className="contacts-column-left">
                <div>
                  <span>CITYPLAZA на ПЕЧЕРСЬКУ</span>
                </div>
                <div>
                  <span>Київ, вул. Мечникова, 2а БЦ «Парус»</span>
                </div>
              </div>
              <div className="contacts-column-right">
                <div>
                  <span>
                    Відділ продажу:
                    <a href="tel:(044) 499-40-09"> (044) 499-40-09</a>
                  </span>
                </div>
                <div>
                  <span>
                    Відділ cервісу:
                    <a href="tel:(044) 495-85-85 "> (044) 495-85-85 </a>
                  </span>
                </div>
              </div>
              <div className="contacts-bottom">
                <div>
                  <span>© 2019 Саміт Моторз Україна</span>
                </div>
                <div className="contacts-bottom__social">
                  <span>
                    <a href="/">Facebook</a>
                  </span>
                  <span>
                    <a href="/">Instagram</a>
                  </span>
                  <span>
                    <a href="/">Youtube</a>
                  </span>
                </div>
                <div className="contacts-bottom__social">
                  <span>
                    <a href="/">Правова інформація </a>
                  </span>
                  <span>
                    <a href="/">Контактна інформація</a>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
