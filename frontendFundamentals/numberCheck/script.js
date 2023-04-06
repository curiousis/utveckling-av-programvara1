const button = document.querySelector("button");
const container = document.querySelector("#container");

button.addEventListener("click", () => {
  const number = document.querySelector("input").value;
  number === ""
    ? (container.innerHTML = `<p> You have not entered a number</p>`)
    : number == 0
    ? (container.innerHTML = `<p class ="blue">The number is zero</p>`)
    : number > 0
    ? (container.innerHTML = `<p class ="green">number is positive</p>`)
    : (container.innerHTML = `<p class ="red">number is negative</p>`);
});
