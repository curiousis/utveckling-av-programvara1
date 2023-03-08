const { request, response } = require("express");
const express = require("express");
const server = express();
const { db } = require("./db");
const path = require("path");

server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(path.join("frontend")));

server.get("/api/pokemon", (request, response) => {
  db.query("SELECT * FROM pokemon", (error, rows) => {
    response.status(200).json(rows);
  });
});

server.get("/api/pokemon/search", (request, response) => {
  db.query(
    "SELECT * FROM pokemon WHERE name LIKE ?",
    ["%" + request.query.name + "%"],
    (error, rows) => {
      response.json(rows);
    }
  );
});

server.listen(3000, () => {
  console.log("Server running...");
});
