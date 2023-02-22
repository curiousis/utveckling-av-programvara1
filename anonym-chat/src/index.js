const { request, response } = require("express");
const express = require("express");
const { v4 } = require("uuid");
const server = express();
const messages = [];
server.use(express.static("public"));
server.use(express.json({ extended: true, limit: "1mb" }));

//post route
server.post("/api/messages", (request, response) => {
  const newMessage = {
    id: v4(),
    message: request.body.message,
    timeStamp: new Date().getTime(),
  };
  messages.push(newMessage);
  response.status(200).json(newMessage);
  console.log(newMessage);
});
server.get("/api/messages", (request, response) => {
  response.status(200).json(messages);
});
server.listen(3000, () => {
  console.log("Server Running...");
});
