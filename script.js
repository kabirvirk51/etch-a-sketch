const container = document.querySelector("#container");

let divs = [];

for (let i = 0; i < 256; i++) {
  let gridDivs = document.createElement("div");
  gridDivs.classList.add("squares");

  divs[i] = gridDivs;
}

for (let i = 0; i < 256; i++) {
  container.appendChild(divs[i]);
}

let isColor = false;

for (let i = 0; i < 256; i++) {
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
