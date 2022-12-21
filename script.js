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

// Funktionen um jeweilige Slider zu synchronisieren
rangeR.addEventListener("input", (event) => {
  //console.log(event.target.value);
  r = event.target.value;
  updateColor();
});

rangeG.addEventListener("input", (event) => {
  g = event.target.value;
  updateColor();
});

rangeB.addEventListener("input", (event) => {
  b = event.target.value;
  updateColor();
});

changeBackground(r, g, b);

function updateColor() {
  changeBackground(r, g, b);
  updateColorValue(r, g, b);
}

// Variable für Button
const btn = document.querySelector("button");

// Click Event auf Button
btn.addEventListener("click", changeRandom);

//Fetch API mit changeRandom function - per Knopfdruck wird Hintergrundfarbe beliebig geändert
function changeRandom() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      r = data.rgb.r;
      g = data.rgb.g;
      b = data.rgb.b;

      rangeR.value = r;
      rangeG.value = g;
      rangeB.value = b;

      changeBackground(r, g, b);
      updateColorValue(r, g, b);
    });
}
