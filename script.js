const container = document.querySelector("#container");
const clearContainer = document.querySelector("#outer-container");
const sizeSlider = document.getElementById("sizeSlider");
const sizeSliderText = document.getElementById("sizeSliderText");

let divs = [];
let gridDivs;
let tempDivs;
let sizeSliderValue = 16;
let isColor = false;

adjustSquareSizes();
setupEventListeners();

sizeSlider.addEventListener("input", () => {
  sizeSliderValue = sizeSlider.value;
  sizeSliderText.textContent = sizeSlider.value + " x " + sizeSlider.value;
  for (let i = 0; i < tempDivs; i++) {
    divs[i].style.backgroundColor = "white";
  }
  adjustSquareSizes();
  setupEventListeners();
});

function adjustSquareSizes() {
  tempDivs = sizeSliderValue * sizeSliderValue;
  divs = []; // Clear the existing divs array

  for (let i = 0; i < tempDivs; i++) {
    gridDivs = document.createElement("div");
    gridDivs.classList.add("squares");
    divs.push(gridDivs);
  }

  container.innerHTML = ""; // Clear the existing content
  for (let i = 0; i < tempDivs; i++) {
    divs[i].style.width = `calc(100% / ${sizeSliderValue})`;
    divs[i].style.height = `calc(100% / ${sizeSliderValue})`;
    container.appendChild(divs[i]);
  }
  container.style.cssText = "overflow:hidden";
}

function setupEventListeners() {
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

const clear = document.createElement("button");
clear.classList.add("clear");
clear.textContent = "Clear";
clearContainer.appendChild(clear);

clear.addEventListener("click", () => {
  for (let i = 0; i < tempDivs; i++) {
    divs[i].style.backgroundColor = "white";
  }
});
