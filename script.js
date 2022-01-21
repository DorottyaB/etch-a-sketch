const container = document.querySelector('.container');
const button = document.querySelector('button');
let userInput = 0;
let div;

function createGrid() {
    let gridArea = userInput ** 2;
    let width = 100 / userInput;
    let height = 100 / userInput;
    for (let i = 0; i < gridArea; i++) {
        div = document.createElement("div");
        div.style.width = `${width}%`;
        div.style.height = `${height}%`;
        container.appendChild(div);
    }
    const gridItems = container.querySelectorAll('div');

    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = "black";
    }))
}

button.addEventListener('click', () => {
    userInput = parseInt(prompt("Enter the number of squares per side for the grid:"));
    if (userInput > 100) {
        userInput = parseInt(prompt("Number must be less than 100"));
    }
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.remove());
    createGrid();
})