const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const productController = require("../controllers/products");

const router = express.Router();

router.get("/", productController.getAllProducts);

module.exports = router;