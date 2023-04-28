const form = document.querySelector("form");
const result = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = parseInt(document.querySelector("#userInput").value);
  userInput == " "
    ? (result.innerHTML = "You have not entered a correct age")
    : userInput < 0
    ? (result.innerHTML = "Pick a correct age")
    : userInput >= 0 && userInput <= 12
    ? (result.innerHTML = `You're a child`)
    : userInput > 12 && userInput <= 19
    ? (result.innerHTML = "You are a teenager")
    : userInput > 19 && userInput <= 64
    ? (result.innerHTML = "You are an adult")
    : (result.innerHTML = "You are a senior citizen");
});
