const { response } = require("express");
const express = require("express");
const { request } = require("http");
const server = express();

server.get("/hello", (request, response) => {
  response.status(200).send("Hej på dig!");
});

server.listen(3000, () => {
  console.log("server running...");
});
