const express = require("express");
const router = express.Router();
const root = require("path").join(__dirname, "build");

router.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

module.exports = router;
