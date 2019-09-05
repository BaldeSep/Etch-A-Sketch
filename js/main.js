let defaultSquareColor = "#05204a";
let color = "#fff";

let state = "Erase";

const DEFAULT_GRID_SIZE = 30;

let gridSize = DEFAULT_GRID_SIZE;

const gridWrapperElement = document.getElementById("grid-wrapper");
gridWrapperElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

const eraserButton = document.getElementById("eraser");
eraserButton.addEventListener("click", e => {
  setState("Erase");
});

const colorButton = document.getElementById("select-pen-color");
colorButton.addEventListener("click", e => {
  setState("Color");
});

const clearGridButton = document.getElementById("clear-grid");
clearGridButton.addEventListener("click", e => {
  const allSquares = gridWrapperElement.children;
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].style.backgroundColor = defaultSquareColor;
  }
});

let square;
for (let i = 0; i < gridSize ** 2; i++) {
  square = document.createElement("div");
  square.addEventListener("mouseover", alterColor);
  gridWrapperElement.appendChild(square);
}

function alterColor(e) {
  if (state === "Color") {
    this.style.backgroundColor = color;
  } else if (state === "Erase") {
    this.style.backgroundColor = defaultSquareColor;
  } else if (state === "Random") {
  }
}

function setState(newState) {
  state = newState;
}
