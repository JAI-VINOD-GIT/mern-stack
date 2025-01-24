const express = require("express");
const router = express.Router();

router.get("/", (rep, res) => {
  res.send("expample api  is working");
});

moduels.exports = router;
