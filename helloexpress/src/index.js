const { response } = require("express");
const express = require("express");
const { request } = require("http");
const path = require("path");
const server = express();

server.use(express.static("public"));

server.get("/", (request, response) => {
  response.status(200).sendFile(path.resolve("public/index.html"));
});
server.listen(3000, () => {
  console.log("server running...");
});
