/* eslint-disable */
import "bootstrap";
import "./style.css";

let pintas = ["♦", "♥", "♠", "♣"];

let numbers = [
  "A",
  "K",
  "J",
  "Q",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];

let number = Math.floor(Math.random() * 12);

let pinta = Math.floor(Math.random() * 4);

let pintasHtml = document.createElement("h1");
pintasHtml.className = "superior";
if (pintas[pinta] == "♦" || pintas[pinta] == "♥") {
  pintasHtml.style.color = "red";
}
pintasHtml.innerText = pintas[pinta];
let div = document.querySelector(".card");
div.appendChild(pintasHtml);

let numbersHtml = document.createElement("h1");
numbersHtml.innerText = numbers[number];
numbersHtml.className = "medio";
div.appendChild(numbersHtml);

let pinta2 = document.createElement("h1");
if (pintas[pinta] == "♦" || pintas[pinta] == "♥") {
  pinta2.style.color = "red";
}
pinta2.className = "abajo";
pinta2.innerText = pintas[pinta];
div.appendChild(pinta2);

//let titulo = document.createElement("h1");
//titulo.innerText = "random card";
//titulo.className = "titulo";
//document.querySelector("body").append(titulo);
