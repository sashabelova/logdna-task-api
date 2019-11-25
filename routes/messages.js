var express = require("express");
var router = express.Router();

router.post("/", function(req, res) {
  // Generating random number to get an error status
  let rolled = Math.floor(Math.random() * Math.floor(100));

  if (rolled % 2) {
    res.status(400).send({
      error:
        "Random rolled " +
        rolled +
        ". So, that's an error! Send another message to have a successful response."
    });
  } else {
    res.send({
      text:
        "Message was sent. Please send another message to get an error."
    });
  }
});

module.exports = router;
