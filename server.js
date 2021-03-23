var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit-data", function (req, res) {
  var name = req.body.firstName + " " + req.body.lastName;
  res.send(name + " submitted successfully");
});

app.listen(5000, function () {
  console.log("Node Server is running!");
});
