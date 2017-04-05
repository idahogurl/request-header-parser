var express = require("express");
var platform = require("platform");
var app = express();

app.get("/", function (req, res) {
    res.json({ ip: req.ip, language: req.acceptsLanguages, software: + platform.os });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("App listening on port " + PORT);
});