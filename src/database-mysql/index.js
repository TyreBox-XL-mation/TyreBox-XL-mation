var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cohortx",
  database: "tyrebox",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to tyrebox db!");
});

module.exports = connection;
