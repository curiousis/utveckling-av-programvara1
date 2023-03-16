const { log } = require("console");
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

server.post("/api/add", (request, response) => {
  db.query(
    "INSERT INTO pokemon(name ,height, weight , base_experience ) VALUES(?,?,?,?)",
    [
      request.body.name,
      request.body.height,
      request.body.weight,
      request.body.base_experience,
    ],
    (error, row) => {
      response.json(row);
    }
  );
});

server.put("/api/info/update", (request, response) => {
  const query = db.query(
    "UPDATE pokemon SET name = ?, height= ?, weight = ?, base_experience = ? WHERE id = ?",
    [
      request.body.name,
      request.body.height,
      request.body.weight,
      request.body.base_experience,
      request.body.id,
    ],
    (error, row) => {
      response.json(row);
    }
  );
});

server.delete("/api/delete/:id", (request, response) => {
  db.query(
    "DELETE FROM pokemon WHERE id = ?",
    [request.params.id],
    (error, feedBack) => {
      response.json(feedBack);
    }
  );
});

server.listen(3000, () => {
  console.log("Server Running");
});
