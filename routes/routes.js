const express = require("express");
const router = express.Router();

router.get("/todo", (req, res) => {
  res.render("index", { title: "Home page" });
});

module.exports = router;
