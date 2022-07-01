const express = require("express");
// const jsonData = require("./data");
const app = express();

app.get("/getUsers1", function (req, res) {
  res.json(jsonData.users.json1);
});

app.get("/getUsers2", function (req, res) {
  res.json(jsonData.users.json2);
});

app.get("/", function (req, res) {
  res.send("<h1>express server</h1>")
})

app.listen(3001);
