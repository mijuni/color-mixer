// Funktion für Hintergrundfarbe ändern
function changeBackground(r, g, b) {
  const main = document.querySelector("#main");
  main.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Variablen für range input um in der Funktion anzusprechen

const rangeR = document.querySelector(".slider--red");
const rangeG = document.querySelector(".slider--green");
const rangeB = document.querySelector(".slider--blue");

// rgb Wert Anzeige

const rgbR = document.querySelector(".rgb-r");
const rgbG = document.querySelector(".rgb-g");
const rgbB = document.querySelector(".rgb-b");

// Funktion zum synchronisieren der Werte
function updateColorValue(r, g, b) {
  rgbR.innerText = r;
  rgbG.innerText = g;
  rgbB.innerText = b;
}

// Variablen synchronisieren mit range input Werten
let r = 30;
let g = 144;
let b = 255;

rangeR.value = r;
rangeG.value = g;
rangeB.value = b;

rgbR.innerText = r;
rgbG.innerText = g;
rgbB.innerText = b;

//Funktionen mit dem Slider den jeweiligen Farbwert festlegen
rangeR.addEventListener("input", (event) => {
  //console.log(event.target.value);
  r = event.target.value;
  changeBackground(r, g, b);
  updateColorValue(r, g, b);
});

rangeG.addEventListener("input", (event) => {
  g = event.target.value;
  changeBackground(r, g, b);
  updateColorValue(r, g, b);
});

rangeB.addEventListener("input", (event) => {
  b = event.target.value;
  changeBackground(r, g, b);
  updateColorValue(r, g, b);
});

changeBackground(r, g, b);
