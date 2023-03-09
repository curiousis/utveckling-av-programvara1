const container = document.querySelector("#container");
const select = document.querySelector("select");

fetchData(2021);

async function fetchData(year) {
  const response = await fetch("/api/temperature/" + year);
  const data = await response.json();
  displayData(data);
}

select.addEventListener("change", () => {
  const selectedYear = select.options[select.selectedIndex].value;
  fetchData(selectedYear);
});

function displayData(array) {
  container.innerHTML = `
  <table>
    <tr>
        <th>Country</th>
        <th>Year</th>
        <th>Average Temperature</th>
    </tr>
   
    ${array
      .map(
        (data) =>
          `<tr >
            <td >${data.country}</td>
            <td >${data.year}</td>
            <td >${data.averageTemperature}</td>
          </tr>`
      )
      .join("")}
  </table>
  `;
}
