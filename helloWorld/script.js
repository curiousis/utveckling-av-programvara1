const reverseArray = "dlrow olleh";
const correctOrder = reverseArray.split("");
const mapArray = correctOrder.map((letter) => letter);
const newArray = mapArray.reverse();
const string = newArray.join("");

function textFunction() {
  const text = string;
  consoleFunction(text);
}

function consoleFunction(variable) {
  console.log(variable);
}

textFunction();
