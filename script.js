// DOM elements
const container = document.querySelector("#container");
const sizeDisplay = document.querySelector(".size");
const slider = document.querySelector("#gridSizeSlider");
const button = document.querySelector("button");

let gridSize = 16;

//initial grid creation
createGrid(gridSize);

slider.oninput = () => {
    gridSize = slider.value;
    sizeDisplay.textContent = `Grid Size: ${gridSize}`
    clearGrid();
    createGrid(gridSize)
}

button.onclick = clearGrid;

function createGrid(size){
    container.style.setProperty("--grid-size", size);
    for (let i = 0; i < (size * size); i++){
        let cell = document.createElement("div");
        cell.onmouseenter = () => {
            cell.classList.add("colored");
        }
        container.appendChild(cell);
    }
}

function clearGrid(){
    container.childNodes.forEach((child) => {
        child.classList.remove("colored");
    })
}