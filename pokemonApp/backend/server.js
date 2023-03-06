const { request, response } = require("express");
const express = require("express");
const server = express();
const { db } = require("./db");
server.use(express.static("frontend"));

server.get("/api/pokemon", (request, response) => {
  db.query("SELECT * FROM pokemon", (error, rows) => {
    response.status(200).json(rows);
  });
});

server.listen(3000, () => {
  console.log("Server running...");
});
