const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const message = document.querySelector("#message").value;
  console.log(message);
  const data = { message };
  async function postMessage() {
    await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  postMessage();
});
