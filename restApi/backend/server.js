const { response } = require("express");
const express = require("express");
const { request } = require("http");
const server = express();
const path = require("path");
const { db } = require("./db");

server.use(express.static(path.resolve("frontend")));
server.use(express.json());
server.use(express.urlencoded());

server.get("/api/info", (request, response) => {
  db.query("SELECT * FROM pokemon", (error, rows) => {
    response.json(rows);
  });
});

server.get("/api/info/:id", (request, response) => {
  response.status(200).sendFile(path.resolve("frontend/pokemon.html"));
});

server.get("/api/pokemon/info/:id", (request, response) => {
  db.query(
    "SELECT* FROM pokemon WHERE id = ?",
    [request.params.id],
    (error, row) => {
      response.json(row);
    }
  );
});

server.post("/api/info", (request, response) => {
  response.json({ msg: request.body });
});

server.put("/api/info/update", (request, response) => {
  response.json({ msg: request.body });
});
server.delete("/api/delete", (request, response) => {
  response.json({ msg: "Deleted" });
});

server.listen(3000, () => {
  console.log("Server Running");
});
