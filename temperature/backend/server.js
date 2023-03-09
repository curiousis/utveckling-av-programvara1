const { response } = require("express");
const express = require("express");
const { request } = require("http");
const server = express();
const path = require("path");
const { db } = require("./db");
server.use(express.static(path.join("frontend")));

server.get("/api/temperature/:year", (request, response) => {
  db.query(
    "SELECT * FROM temperature WHERE year = ?",
    [request.params.year],
    (error, rows) => {
      response.json(rows);
    }
  );
});

server.listen(3000, () => {
  console.log("Server Running...");
});
