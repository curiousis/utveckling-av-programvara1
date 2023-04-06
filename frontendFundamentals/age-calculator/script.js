const container = document.querySelector("#container");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const dateOfBirth = new Date(document.querySelector("input").value);
  const currentDate = new Date();

  const ageInmilisec = currentDate.getTime() - dateOfBirth.getTime();
  const ageInYears = Math.floor(ageInmilisec / (1000 * 60 * 60 * 24 * 365));
  container.innerHTML = `You are ${ageInYears} years`;
});
