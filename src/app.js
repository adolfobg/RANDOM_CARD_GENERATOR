/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let random_number = number[Math.floor(Math.random() * number.length)];
  document.querySelector(".number").innerHTML = number[random_number];
  const symbol = ["♦", "♥", "♠", "♣"];
  let random_symbol = symbol[Math.floor(Math.random() * symbol.length)];
  document.querySelector(".top-symbol").innerHTML = symbol[random_symbol];
  document.querySelector(".symbol_down").innerHTML = symbol[random_symbol];
  if (random_symbol <= 1) {
    document.querySelector(".top-symbol").classList.add("color-red");
    document.querySelector(".symbol_down").classList.add("color-red");
  }
};
