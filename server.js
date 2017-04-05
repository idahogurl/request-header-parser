var express = require("express");
var useragent = require("useragent");
var app = express();

app.get("/", function (req, res) {
    var agent = useragent.parse(req.headers['user-agent']).os.toString();
    res.json({ ip: req.ip, language: req.acceptsLanguages()[0], software: agent.os.toString()});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", function () {
  console.log("App listening on port " + PORT);
});