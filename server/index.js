var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const router = require("../src/routes/routes.js");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist/"));
app.use(bodyParser.json());

app.use("/tyrebox", router);

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
