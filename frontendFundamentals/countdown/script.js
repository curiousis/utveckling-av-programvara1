const container = document.querySelector("#container");
let secondsLeft = 10;
setTimeout(changeFunction, 1000 * 10);

function changeFunction() {
  container.innerHTML = `<p>Hej på dig</p>`;
  document.body.style.background = "red";
}

function tick() {
  secondsLeft === 1
    ? (container.innerHTML = `${secondsLeft} sekund`)
    : (container.innerHTML = `${secondsLeft} sekunder`);

  secondsLeft--;

  secondsLeft >= 1 ? setTimeout(tick, 1000) : null;
}
tick();
