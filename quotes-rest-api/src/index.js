const { response } = require("express");
const express = require("express");
const { get, request } = require("http");
const server = express();
const quotes = require("./quotes.json");

server.use(express.static("public"));

server.get("/api/quote", (request, response) => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];

  response.status(200).json(randomQuote);
});

server.listen(3000, () => {
  console.log("server running...");
});
