const mysql = require("mysql2");

exports.db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "logindb",
  port: 3307,
});
