const socket = io();
//console.log(socket);

const send = document.querySelector("button");

send.addEventListener("click", () => {
  socket.emit("msg", document.querySelector("#msg-input").value);
  document.querySelector("#msg-input").value = "";
});

socket.on("msg", (msg) => {
  document.querySelector("#ul").innerHTML += `<li>${msg}</li>`;
});
