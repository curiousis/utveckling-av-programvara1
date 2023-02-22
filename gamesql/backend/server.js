const { request, response } = require("express");
const express = require("express");
const server = express();
const { db } = require("./database");
//const path = require("path");

server.use(express.static("public"));

server.get("/api/games", (request, response) => {
  db.query("SELECT * FROM games", (err, rows) => {
    response.status(200).json(rows);
  });
});

server.listen(3000, () => {
  console.log("Server Running...");
});
