const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  const userInput = parseInt(document.querySelector("input").value);
  const number = Math.floor(Math.random() * 11);

  if (userInput === number) {
    result.innerHTML = `You guessed the correct number.`;
  } else {
    result.innerHTML = `Your guess was incorrect. The correct number was ${number}`;
  }
});
