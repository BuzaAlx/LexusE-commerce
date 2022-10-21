import { Link, Outlet, useLocation } from "react-router-dom";
import React from "react";

const ModelsListNav = [
  { id: 1, name: "Всі", link: "/home/model-list" },
  { id: 2, name: "Седани", link: "/home/model-list/sedans" },
  { id: 3, name: "Купе", link: "/home/model-list/coupe" },
  { id: 4, name: "Кросовери", link: "/home/model-list/crossover" },
  { id: 5, name: "Позашляховики", link: "/home/model-list/offroaders" },
];

export default function ProductLayout() {
  let { pathname } = useLocation();

  return (
    <main className="main-carList">
      <nav>
        <ul className="navigation">
          {ModelsListNav.map((el) => (
            <li
              key={el.id}
              className={`navigation-item ${
                el.link === pathname ? "active" : ""
              }`}
            >
              <Link to={el.link}>{el.name}</Link>
            </li>
          ))}

          {/* 
          <li className="navigation-item active">
            <Link to={}> </Link>
            <a href="/">Всі</a>
          </li>
          <li className="navigation-item">
            <a href="/">Седани</a>
          </li>
          <li className="navigation-item">
            <a href="/">Купе</a> */}
          {/* </li>
          <li className="navigation-item">
            <a href="/">Кросовери</a>
          </li>
          <li className="navigation-item">
            <a href="/">Позашляховики</a>
          </li>
          <li className="navigation-item">
            <a href="/">Гібриди</a>
          </li>
          <li className="navigation-item">
            <a href="/">F Sport</a>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
