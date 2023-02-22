const button = document.querySelector("button");
const messageContainer = document.querySelector("#message-container");
const sentMessages = [];

button.addEventListener("click", (e) => {
  e.preventDefault();
  const message = document.querySelector("#message").value;
  const data = { message };

  async function postMessage() {
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const myMessage = await response.json();
    sentMessages.push(myMessage);
  }
  postMessage();
});

//checking if the message is my message

function isMyMessage(message) {
  return sentMessages.findIndex((element) => element.id === message.id) >= 0;
}

async function fetchMessages() {
  const response = await fetch("/api/messages");
  const data = await response.json();

  messageContainer.innerHTML = `
  ${data
    .map(
      (message) =>
        `<p class=""${
          isMyMessage(message) ? "my-message" : ""
        }"><span class="date-span">${new Date(
          message.timeStamp
        ).toLocaleString()}</span><span>${message.message}</span></p>`
    )
    .join("")}
  `;
}

fetchMessages();
window.setInterval(fetchMessages, 1000);
