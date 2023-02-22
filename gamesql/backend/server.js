const express = require("express");
const server = express();
//const path = require("path");

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("Server Running...");
});
