var randomColor = require("randomcolor");
var convert = require("color-convert");

import * as v from "./app.variables";

export default () => {
  // Variables for color history
  const colorHistorySection = document.querySelector('.color-history')
  let paletteContainer = document.createElement("div")
  let count = 0
  // Variables for randomColor options
  let luminosity = "";
  let hue = "";
  
  // Main event listener for selection boxes
  document.addEventListener("change", e => {
    if (e.target.classList.contains("colorSelectBox")) {
      luminosity = e.target.options[e.target.selectedIndex].value;
    } else if (e.target.classList.contains("hueSelectBox")) {
      hue = e.target.options[e.target.selectedIndex].value;
    }
    setBackground();
  });
  document.querySelector(".generate-button").addEventListener("click", e => {
    e.preventDefault();
    setBackground();
  });
  // Run randomColor function and set colors
  function setBackground() {
    const color = randomColor({
      count: 5,
      luminosity: luminosity,
      hue: hue
    });
    // Set colors, convert hex to rgb,add the box shadow
    for (let i = 0; i <= 4; i += 1) {
      const hex = convert.hex.rgb(color[i]);
      v.swatches[i].textContent = color[i];
      v.swatches[i].style.background = color[i];
      v.swatches[i].style.boxShadow = `0 -1px 30px rgba(${hex[0]}, ${hex[1]}, ${
        hex[2]
      }, 0.7)`;
    }
  }
  // Listens for spacebar press to change color
  document.body.onkeydown = e => {
    if (e.keyCode === 32) {
      e.preventDefault();
    }
  };
  document.body.onkeyup = e => {
    if (e.keyCode === 32) {
      setBackground();
    }
  };
  // COLOR HISTORY //
  function addToHistoryPalettes() {
    v.swatches.forEach(element => {
      let colorBox = document.createElement("div")
      let hex = document.createTextNode(element.textContent)

      colorBox.appendChild(hex)
      colorBox.className = "color-box"
      colorBox.style.backgroundColor = element.textContent

      paletteContainer.appendChild(colorBox)
      paletteContainer.className = 'palette-container column is-3'

      count += 1
      if (count == 5) {
        colorHistorySection.appendChild(paletteContainer)
        colorHistorySection.insertBefore(paletteContainer, colorHistorySection.childNodes[0])
      }
    })
  }

  document.addEventListener("DOMContentLoaded", () => {
    setBackground();
  });
}
