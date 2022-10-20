import React from "react";
import { render } from "react-dom";
import "normalize.css/normalize.css";
import "styles/style.scss";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";

const root = document.getElementById("app");

render(<App />, root);
