//const e = require("express");

const container = document.querySelector("#pokemon-container");

fetchPokemon();
async function fetchPokemon() {
  const response = await fetch("/api/pokemon");
  const pokemons = await response.json();
  displayPokemon(pokemons);
}

function filterPokemon() {
  const form = document.querySelector("#search");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector("input").value;
    const search = { name: name };

    const response = await fetch("/api/pokemon/search", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(search),
    });
    const data = await response.json();
    displayPokemon(data);
  });
}
filterPokemon();

function displayPokemon(pokemons) {
  container.innerHTML = `
  ${pokemons
    .map(
      (pokemon) =>
        `<div id="pokemon">
        <h4>${pokemon.name}</h4>
        <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg"/>
        </div>`
    )
    .join("")}`;
}
