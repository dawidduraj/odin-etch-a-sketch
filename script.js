// DOM elements
const container = document.querySelector(".container");
const sizeDisplay = document.querySelector(".size");
const slider = document.querySelector("#gridSizeSlider");

let gridSize = 16;

slider.oninput = () => {
    console.log(slider.value);
    gridSize = slider.value;
    sizeDisplay.textContent = `Grid Size: ${gridSize}`
}
