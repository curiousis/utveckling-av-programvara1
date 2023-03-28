const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { request, response } = require("express");
const server = express();
const path = require("path");

server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.json());
server.use(express.static("frontend"));

server.get("/login", (request, response) => {
  response.sendFile(path.resolve("frontend/login.html"));
});

server.get("/dashboard", (request, response) => {
  response.sendFile(path.resolve("frontend/dashboard.html"));
});

server.get("/", (request, response) => {
  response.sendFile(path.resolve("frontend/index.html"));
});

server.listen(3000, () => {
  console.log("Server Running...");
});
