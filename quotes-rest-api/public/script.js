fetchdata();

async function fetchdata() {
  const response = await fetch("/api/quote");
  const data = await response.json();
  console.log(data);
}
