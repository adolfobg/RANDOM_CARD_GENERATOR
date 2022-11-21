/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const symbol_up = ["♦", "♥", "♠", "♣"]
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"]
  const symbol_down = ["♦", "♥", "♠", "♣"]
  
  let symb_up = symbol_up[Math.floor(Math.random() * symbol_up.length)]
  let number = numbers[Math.floor(Math.random() * numbers.length)]
  let symb_down = symbol_down[Math.floor(Math.random() * symbol_down.length)]
  
  const up = () =>{
    document.getElementById('up')
    if symb_up === 0 (
      document.write('♦')
      up.classList.add("color-red")
    )
  }
};
