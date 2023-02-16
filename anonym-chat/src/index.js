const { request, response } = require("express");
const express = require("express");
const server = express();
const messages = [];
server.use(express.static("public"));
server.use(express.json({ extended: true, limit: "1mb" }));

//post route
server.post("/api/messages", (request, response) => {
  messages.push(request.body);
  console.log(messages);
});
server.get("/api/messages", (request, response) => {
  response.status(200).json(messages);
});
server.listen(3000, () => {
  console.log("Server Running...");
});
