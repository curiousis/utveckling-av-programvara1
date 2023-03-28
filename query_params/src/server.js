const { response } = require("express");
const express = require("express");
const { request } = require("http");
const server = express();
const path = require("path");

server.use(express.static(path.resolve("public")));
server.use(express.urlencoded());
server.use("/", (request, response, next) => {
  console.log(request.headers.cookie);
  if (request.headers.cookie == "auth=true") {
    next();
  } else {
    response.redirect("back");
  }
});

server.get("/find", (request, response) => {
  response.status(200).json(request.query);
});

server.listen(3000, () => {
  console.log("Server Running...");
});
