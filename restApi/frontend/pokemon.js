const container = document.querySelector("#container");
const pokemonId = window.location.pathname.split("/").slice(-1)[0];

async function fetchPokemonData() {
  const response = await fetch("/api/pokemon/info/" + pokemonId);
  const data = await response.json();

  container.innerHTML = `
  ${data.map(
    (item) => `
      <div id="header">        
        <img src="https://img.pokemondb.net/artwork/large/${item.name}.jpg"/>
        <h1>${item.name}</h1>
      </div>
      <div>
        <p>${item.name} is a great pokemon with a variety of qualities. It has a height of
         ${item.height} meters and weighs ${item.weight}kg. It's base experience is 
         ${item.base_experience}. Have fun playing with it</p>
      </div>
      `
  )}
  `;
}

fetchPokemonData();
