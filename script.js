const container = document.querySelector('.grid');
const clearBtn = document.querySelector('#clearBtn');
const grayscaleMode = document.querySelector('#grayscale-mode');
const rainbowMode = document.querySelector('#rainbow-mode');
const randColorBtn = document.querySelector('#random-mode');
const eraseBtn = document.querySelector('#eraseBtn');
const rangeDisplay = document.querySelector('#range-display');
const rangeBar = document.querySelector('#range');
let userInput = rangeBar.value;
let div;
let colorMode = '';

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
}

function randomColor() {
    if (!div) {
        createGrid();
    }
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }))
}

function grayscale() {
    if (!div) {
        createGrid();
    }
    const gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        const x = Math.floor(Math.random() * 211);
        gridItem.style.backgroundColor = `rgb(${x}, ${x}, ${x})`;
    }))
}

function rainbowColors() {
    if (!div) {
        createGrid();
    }
    const gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }))
}

function erase() {
    const gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'rgb(255, 255, 255)';
    }))
}

function clear() {
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.remove());
    createGrid();
}

randColorBtn.addEventListener('click', () => {
    colorMode = 'random';
    randomColor();
})

grayscaleMode.addEventListener('click', () => {
    colorMode = 'gray';
    grayscale();
})

rainbowMode.addEventListener('click', () => {
    colorMode = 'rainbow';
    rainbowColors();
})

eraseBtn.addEventListener('click', erase);

clearBtn.addEventListener('click', clear);

rangeBar.addEventListener('change', () => {
    userInput = rangeBar.value;
    rangeDisplay.textContent = `${rangeBar.value} x ${rangeBar.value}`;
    clear();
    if (colorMode === 'gray') {
        grayscale()
    } else if (colorMode === 'rainbow') {
        rainbowColors()
    } else if (colorMode === 'random') {
        randomColor()
    }
})