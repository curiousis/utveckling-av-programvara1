const container = document.querySelector("#pokemon-container");

async function fetchPokemon() {
  const response = await fetch("/api/pokemon");
  const pokemons = await response.json();

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
fetchPokemon();
