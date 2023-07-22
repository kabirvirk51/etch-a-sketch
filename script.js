const container = document.querySelector("#container");
const clearRGBButtons = document.querySelector("#outer-container");
const sizeSlider = document.getElementById("sizeSlider");
const sizeSliderText = document.getElementById("sizeSliderText");

let divs = [];
let gridDivs;
let tempDivs;
let sizeSliderValue = 16;
let isColor = false;
let currentMode = "black";

adjustSquareSizes();
setupEventListenersBlack();

sizeSlider.addEventListener("input", () => {
  sizeSliderValue = sizeSlider.value;
  sizeSliderText.textContent = sizeSlider.value + " x " + sizeSlider.value;

  const tempMode = currentMode;

  for (let i = 0; i < tempDivs; i++) {
    divs[i].style.backgroundColor = "white";
  }
  adjustSquareSizes();

  currentMode = tempMode;
  if (currentMode === "black") {
    setupEventListenersBlack();
  } else if (currentMode === "RGB") {
    setupEventListenersRGB();
  }
});

function adjustSquareSizes() {
  tempDivs = sizeSliderValue * sizeSliderValue;
  divs = [];

  for (let i = 0; i < tempDivs; i++) {
    gridDivs = document.createElement("div");
    gridDivs.classList.add("squares");
    divs.push(gridDivs);
  }

  container.innerHTML = "";
  for (let i = 0; i < tempDivs; i++) {
    divs[i].style.width = `calc(100% / ${sizeSliderValue})`;
    divs[i].style.height = `calc(100% / ${sizeSliderValue})`;
    container.appendChild(divs[i]);
  }
  container.style.cssText = "overflow:hidden";
}

function setupEventListenersBlack() {
  for (let i = 0; i < tempDivs; i++) {
    divs[i].addEventListener("mouseenter", () => {
      if (isColor == true) {
        divs[i].style.backgroundColor = "black";
      }
    });

    divs[i].addEventListener("mousedown", () => {
      isColor = true;
      divs[i].style.backgroundColor = "black";
    });

    divs[i].addEventListener("mouseup", () => {
      isColor = false;
    });
  }
}

function setupEventListenersRGB() {
  for (let i = 0; i < tempDivs; i++) {
    divs[i].addEventListener("mouseenter", () => {
      if (isColor == true) {
        divs[i].style.backgroundColor = getRandomColor();
      }
    });

    divs[i].addEventListener("mousedown", () => {
      isColor = true;
      divs[i].style.backgroundColor = getRandomColor();
    });

    divs[i].addEventListener("mouseup", () => {
      isColor = false;
    });
  }
}

const clear = document.createElement("button");
clear.classList.add("clear");
clear.textContent = "Clear";
clearRGBButtons.appendChild(clear);

clear.addEventListener("click", () => {
  currentMode = "black";
  for (let i = 0; i < tempDivs; i++) {
    divs[i].style.backgroundColor = "white";
  }
  setupEventListenersBlack();
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const RGB = document.createElement("button");
RGB.classList.add("rgb");
RGB.textContent = "RGB";
clearRGBButtons.appendChild(RGB);

RGB.addEventListener("click", () => {
  currentMode = "RGB";
  setupEventListenersRGB();
});
