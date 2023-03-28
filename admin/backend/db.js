const mysql = require("mysql2");

exports.db = mysql.createConnection({
  user: "root",
  database: "logindb",
  host: "127.0.0.1",
  port: "3307",
});
