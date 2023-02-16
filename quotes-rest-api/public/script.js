const container = document.querySelector("#quote-container");
fetchdata();

async function fetchdata() {
  const response = await fetch("/api/quote");
  const data = await response.json();

  container.innerHTML = `
    <p class="quote">"${data.quote}"</p>
    <p class="author"><span>-</span> ${data.author} <span>-</span> </p>
  `;
}
