const { request, response } = require("express");
const express = require("express");
const server = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const { db } = require("./db");
const { json } = require("body-parser");
let sessionData;

server.use(express.static("frontend"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(
  session({
    secret: "isra2012",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  })
);

server.get("/admin", (request, response) => {
  if (sessionData) {
    response.sendFile(path.resolve("frontend/admin.html"));
  } else {
    response.redirect("back");
  }
});

server.post("/api/login", (request, response) => {
  db.query(
    "SELECT * FROM app_users WHERE username = ? AND password = ?",
    [request.body.username, request.body.password],
    (error, result) => {
      if (result.length > 0) {
        const loggedUser = {
          username: result[0].username,
          password: result[0].password,
        };
        request.session.user = loggedUser;
        request.session.authorized = true;
        sessionData = request.session;
        response.redirect("/admin");
      } else {
        response.redirect("back");
      }
    }
  );
});

server.get("/logout", (request, response) => {
  sessionData = null;
  response.redirect("/");
});

server.listen(3000, () => {
  console.log("Server Running...");
});
