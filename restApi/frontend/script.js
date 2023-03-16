const container = document.querySelector("#pokemon-container");

fetchPokemons();

async function fetchPokemons() {
  const response = await fetch("/api/info");
  const rows = await response.json();
  renderPokemons(rows);
}

function addPokemon() {
  const addButton = document.querySelector("#add-button");
  const newName = document.querySelector("#name");
  const newHeight = document.querySelector("#height");
  const newWeight = document.querySelector("#weight");
  const newBaseExperience = document.querySelector("#base_experience");

  addButton.addEventListener("click", () => {
    const data = {
      name: newName.value,
      height: newHeight.value,
      weight: newWeight.value,
      base_experience: newBaseExperience.value,
    };

    function postFunction(method) {
      fetch("/api/add", {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    postFunction("POST");
  });
}

addPokemon();

function renderPokemons(data) {
  container.innerHTML = `
    ${data
      .map(
        (item) =>
          `
          <div id="pokemon" onClick="window.location='/api/info/${item.id}'">
            <h4>${item.name}</h4>
            <img src="https://img.pokemondb.net/artwork/large/${item.name}.jpg"/>  
          </div> 
          `
      )
      .join("")}   
    `;
}
