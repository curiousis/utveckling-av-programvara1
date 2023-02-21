const button = document.querySelector("button");
const messageContainer = document.querySelector("#message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const message = document.querySelector("#message").value;
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
  fetchMessages();
});

async function fetchMessages() {
  const response = await fetch("/api/messages");
  const data = await response.json();
  messageContainer.innerHTML = `

  ${data
    .map(
      (message) =>
        `<p><span class="date-span">${new Date(
          message.timeStamp
        ).toLocaleString()}</span><span>${message.message}</span></p>`
    )
    .join("")}
  `;
}
fetchMessages();

window.setInterval(fetchMessages, 300);
