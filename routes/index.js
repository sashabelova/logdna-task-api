var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send({
    title: "Hello at LogDNA api!"
  });
});

module.exports = router;
