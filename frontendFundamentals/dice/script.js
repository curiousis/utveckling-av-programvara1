const button = document.querySelector("button");
const canvasDice = document.querySelector(".canvasDice");
const sides = [
  drawSideOne,
  drawSideTwo,
  drawSideThree,
  drawSideFour,
  drawSideFive,
  drawSideSix,
];
const dotRadius = 10;
const dotSpacing = 50;
const centerX = canvasDice.width / 2;
const centerY = canvasDice.height / 2;

button.addEventListener("click", rollDice);

function rollDice() {
  const randomNumber = Math.floor(Math.random() * sides.length);
  canvasDice.classList.add("dice-animation");

  setTimeout(() => {
    canvasDice.classList.remove("dice-animation");
    canvasDice.innerHTML = sides[randomNumber]();
  }, 1500);
}
function clearCanvas() {
  const context = canvasDice.getContext("2d");
  context.clearRect(0, 0, canvasDice.width, canvasDice.height);
}

function drawDot(x, y) {
  const context = canvasDice.getContext("2d");
  context.beginPath();
  context.arc(x, y, dotRadius, 0, 2 * Math.PI);
  context.closePath();
  context.fill();
}

function drawSideOne() {
  clearCanvas();
  drawDot(centerX, centerY);
}

function drawSideTwo() {
  clearCanvas();
  drawDot(centerX + dotSpacing, centerY + dotSpacing);
  drawDot(centerX - dotSpacing, centerY - dotSpacing);
}

function drawSideThree() {
  clearCanvas();
  drawDot(centerX, centerY);
  drawDot(centerX + dotSpacing, centerY + dotSpacing);
  drawDot(centerX - dotSpacing, centerY - dotSpacing);
}

function drawSideFour() {
  clearCanvas();
  drawDot(centerX + dotSpacing, centerY + dotSpacing);
  drawDot(centerX + dotSpacing, centerY - dotSpacing);
  drawDot(centerX - dotSpacing, centerY + dotSpacing);
  drawDot(centerX - dotSpacing, centerY - dotSpacing);
}

function drawSideFive() {
  clearCanvas();
  drawDot(centerX + dotSpacing, centerY + dotSpacing);
  drawDot(centerX - dotSpacing, centerY - dotSpacing);
  drawDot(centerX, centerY);
  drawDot(centerX + dotSpacing, centerY - dotSpacing);
  drawDot(centerX - dotSpacing, centerY + dotSpacing);
}

function drawSideSix() {
  clearCanvas();
  drawDot(centerX + dotSpacing, centerY + dotSpacing);
  drawDot(centerX - dotSpacing, centerY - dotSpacing);
  drawDot(centerX + dotSpacing, centerY);
  drawDot(centerX - dotSpacing, centerY);
  drawDot(centerX + dotSpacing, centerY - dotSpacing);
  drawDot(centerX - dotSpacing, centerY + dotSpacing);
}
