const tableContainer = document.querySelector("#table-container");

async function fetchGames() {
  const response = await fetch("/api/games");
  const data = await response.json();
  tableContainer.innerHTML = `

      <table>
          <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Publisher</th>
          </tr>

            ${data
              .map(
                (game) => `
                <tr>
                  <td>${game.id}</td>
                  <td>${game.name}</td>
                  <td>${game.genre}</td>
                  <td>${
                    new Date(game.release_date).toLocaleString().split(",")[0]
                  }</td>
                  <td>${game.publisher}</td>
                </tr>
                `
              )
              .join("")}

      </table>
    
  `;
}

fetchGames();
