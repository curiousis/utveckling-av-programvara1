const mysql = require("mysql2");

exports.db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pokemon",
});
