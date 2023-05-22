const button = document.querySelector("button");
const canvasDice = document.querySelector(".canvasDice");
const sides = ["one", "two", "three", "four", "five", "six"];

button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * sides.length);
  canvasDice.innerHTML = sides[randomNumber];
  drawSideThree();
});

function drawSideOne() {
  const context = canvasDice.getContext("2d");
  context.clearRect(0, 0, canvasDice.width, canvasDice.height);
  context.beginPath();
  context.arc(canvasDice.width / 2, canvasDice.height / 2, 5, 0, 2 * Math.PI);
  context.fill();
}

function drawSideTwo() {
  const context = canvasDice.getContext("2d");
  context.clearRect(0, 0, canvasDice.width, canvasDice.height);
  context.beginPath();
  context.arc(canvasDice.width / 3, canvasDice.height / 3, 5, 0, 2 * Math.PI);
  context.arc(
    (2 * canvasDice.width) / 3,
    (2 * canvasDice.height) / 3,
    5,
    0,
    2 * Math.PI
  );
  context.fill();
}

function drawSideThree() {
  const context = canvasDice.getContext("2d");
  context.clearRect(0, 0, canvasDice.width, canvasDice.height);
  context.beginPath();
  context.arc(canvasDice.width / 4.5, canvasDice.height / 5, 5, 0, 2 * Math.PI);
  context.arc(canvasDice.width / 2, canvasDice.height / 2, 5, 0, 2 * Math.PI);
  context.arc(
    (2 * canvasDice.width) / 3,
    (3 * canvasDice.height) / 3.5,
    5,
    0,
    2 * Math.PI
  );
  context.fill();
}
