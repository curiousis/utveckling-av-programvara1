const container = document.querySelector("#pokemon-container");

fetchPokemons();

async function fetchPokemons() {
  const response = await fetch("/api/info");
  const rows = await response.json();
  renderPokemons(rows);
}

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
