const mysql = require("mysql2");

exports.db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "temperature",
  port: "3307",
});
