var express = require("express");
var cors = require('cors');
var logger = require("morgan");
var indexRouter = require("./routes/index");
var articlesRouter = require("./routes/articles");
var messagesRouter = require("./routes/messages");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/articles", articlesRouter);
app.use("/messages", messagesRouter);
app.use(function(req, res, next) {
  res.status(404).send({ error: "Sorry can't find that!" });
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ error: "Something broke!" });
});

module.exports = app;
