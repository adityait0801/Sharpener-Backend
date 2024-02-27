const express = require("express");
const path = require("path");
const dirName = require("../utils/path");

const router = express.Router();

router.get("/add_product", (req, res, next) => {
  res.sendFile(path.join(dirName, "views", "add_product.html"));
});

router.post("/add_product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;