var express = require("express");
var app = express();

app.use(express.static("front"));

var port = 8000;

app.listen(port);
console.log("server running on port " + port);
