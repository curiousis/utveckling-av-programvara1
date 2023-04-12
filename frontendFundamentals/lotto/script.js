const form = document.querySelector("form");
const result = document.querySelector(".result");
const playAgainButton = document.querySelector("#replay-button");

function generateRandomNumbers() {
  const randomNumbers = [];
  while (randomNumbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 35) + 1;

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

function compareNumbers(userNumbers, randomNumbers) {
  let count = 0;
  for (const num of userNumbers) {
    if (randomNumbers.includes(num)) {
      count++;
    }
  }
  return count;
}

function submitNumbers(event) {
  event.preventDefault();

  const guess1 = parseInt(document.querySelector("#guess1").value);
  const guess2 = parseInt(document.querySelector("#guess2").value);
  const guess3 = parseInt(document.querySelector("#guess3").value);
  const guess4 = parseInt(document.querySelector("#guess4").value);
  const guess5 = parseInt(document.querySelector("#guess5").value);
  const guess6 = parseInt(document.querySelector("#guess6").value);
  const guess7 = parseInt(document.querySelector("#guess7").value);

  const userNumbers = [guess1, guess2, guess3, guess4, guess5, guess6, guess7];
  const randomNumbers = generateRandomNumbers();

  correctCount = compareNumbers(userNumbers, randomNumbers);
  result.style.display = "block";
  playAgainButton.style.display = "block";
  result.innerHTML = `You got ${correctCount} out of 7`;
}

form.addEventListener("submit", submitNumbers);
playAgainButton.addEventListener("click", () => {
  window.location.reload();
});
