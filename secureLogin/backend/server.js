const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { request, response } = require("express");
const server = express();
const path = require("path");
const { db } = require("./db");
const MySQLStore = require("express-mysql-session")(session);

// Creating and saving session to database
server.use(
  session({
    secret: "israoqwemwmsdlsadlkadslopsdjwk",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: true,
      maxAge: 1000 * 60 * 60,
    },
    store: new MySQLStore({
      host: "localhost",
      user: "root",
      database: "logindb",
      port: 3307,
    }),
  })
);
server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.json());
server.use(express.static("frontend"));

server.get("/login", (request, response) => {
  response.sendFile(path.resolve("frontend/login.html"));
});

server.get("/dashboard", (request, response) => {
  request.sessionStore.get(request.cookies.session_id, (error, session) => {
    if (session == null) {
      response.redirect("back");
    } else {
      response.sendFile(path.resolve("frontend/dashboard.html"));
    }
  });

  server.get("/", (request, response) => {
    response.sendFile(path.resolve("frontend/index.html"));
  });
});

server.post("/api/login", (request, response) => {
  db.query(
    "SELECT * FROM app_users WHERE username = ? AND password=?",
    [request.body.username, request.body.password],
    (error, user) => {
      if (
        user &&
        user.length > 0 &&
        user[0].username === request.body.username &&
        user[0].password === request.body.password
      ) {
        request.session.user = { user: user, loggedIn: true };
        response.cookie("session_id", request.sessionID, {
          httpOnly: true,
          secure: true,
          sameSite: true,
        });
        response.redirect("/dashboard");
      } else {
        response.redirect("/");
      }
    }
  );
});

server.listen(3000, () => {
  console.log("Server Running...");
});
