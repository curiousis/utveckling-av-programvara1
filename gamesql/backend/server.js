const { request, response } = require("express");
const express = require("express");
const server = express();
const { db } = require("./database");
//const path = require("path");

server.use(express.static("public"));

server.get("/api/games", (request, response) => {
  response.status(200).json(db);
});
server.listen(3000, () => {
  console.log("Server Running...");
});
