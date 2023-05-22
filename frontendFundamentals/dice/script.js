const button = document.querySelector("button");
const canvasDice = document.querySelector(".canvasDice");
const sides = ["one", "two", "three", "four", "five", "six"];

button.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * sides.length);
  canvasDice.innerHTML = sides[randomNumber];
  drawSideFive();
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
  const dotRadius = 5;
  const dotSpacing = 50;

  context.clearRect(0, 0, canvasDice.width, canvasDice.height);
  const centerX = canvasDice.width / 2;
  const centerY = canvasDice.height / 2;

  context.beginPath();
  context.arc(
    centerX - dotSpacing,
    centerY - dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );

  context.arc(centerX, centerY, dotRadius, 0, 2 * Math.PI);

  context.arc(
    centerX + dotSpacing,
    centerY + dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.fill();
  context.closePath();
}

function drawSideFour() {
  const context = canvasDice.getContext("2d");
  const dotRadius = 5;
  const dotSpacing = 50;

  context.clearRect(0, 0, canvasDice.width, canvasDice.height);

  const centerX = canvasDice.width / 2;
  const centerY = canvasDice.height / 2;
  context.fillStyle = "black";

  context.beginPath();
  context.arc(
    centerX - dotSpacing,
    centerY - dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
  context.beginPath();
  context.arc(
    centerX + dotSpacing,
    centerY - dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
  context.beginPath();
  context.arc(
    centerX - dotSpacing,
    centerY + dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
  context.beginPath();
  context.arc(
    centerX + dotSpacing,
    centerY + dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
}

function drawSideFive() {
  const context = canvasDice.getContext("2d");
  const dotRadius = 5;
  const dotSpacing = 50;

  const centerX = canvasDice.width / 2;
  const centerY = canvasDice.height / 2;

  context.clearRect(0, 0, canvasDice.width, canvasDice.height);

  context.beginPath();
  context.arc(
    centerX - dotSpacing,
    centerY - dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
  context.beginPath();
  context.arc(
    centerX + dotSpacing,
    centerY + dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
  context.beginPath();
  context.arc(centerX, centerY, dotRadius, 0, 2 * Math.PI);
  context.closePath();
  context.fill();

  context.beginPath();
  context.arc(
    centerX + dotSpacing,
    centerY - dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();

  context.beginPath();
  context.arc(
    centerX - dotSpacing,
    centerY + dotSpacing,
    dotRadius,
    0,
    2 * Math.PI
  );
  context.closePath();
  context.fill();
}

function drawSideSix() {
  const context = canvasDice.getContext("2d");
  const dotRadius = 5;
  const dotSpacing = 50;
  context.clearRect(0, 0, canvasDice.width, canvasDice.height);
  const centerX = canvasDice.width / 2;
  const centerY = canvasDice.height / 2;
}
