import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { colorsArray } from "./color";

const randomNumber = Math.floor(Math.random() * 20);
const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("body").style.background =
  colorsArray[randomNumber].bgColor;
root.render(
  <React.StrictMode>
    <App randomNumber={randomNumber} />
    <p className="center">by Chavi</p>
  </React.StrictMode>
);
