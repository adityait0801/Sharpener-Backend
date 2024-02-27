const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const productController = require("../controllers/products");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", productController.getProducts);

// /admin/add-product => POST
router.post("/add-product", productController.postProducts);

exports.routes = router;
exports.products = products;