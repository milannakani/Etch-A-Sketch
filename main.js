let color = "black";
let click = true;

function populateGrid (size) {
let board = document.querySelector(".grid");
let squares = board.querySelectorAll("div")
//squares.forEach(div => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size*size;
for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare); 
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend",square);
}
}
populateGrid(16);

function changeSize(input) {
    if (input >=2 && input<=100) {
        document.querySelector(".error").style.display = "none";
        populateGrid(input); 
    }
    else {
        populateGrid(0);
        document.querySelector(".error").style.display = "flex";
    }
}

function colorSquare () {
    if (click) {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }
    }
}

function changeColor(choice) {
color = choice;
}
function resetBoard () {
    let board = document.querySelector(".grid");
    let squares = board.querySelectorAll("div")
    squares.forEach(div => div.style.backgroundColor = "white");
}

document.querySelector(".content").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
        document.querySelector(".mode").textContent = "Coloring";
    }
    else {
        document.querySelector(".mode").textContent = "Not-Coloring";
    }
    }
});