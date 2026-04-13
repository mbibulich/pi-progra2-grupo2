var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get('/', productController.index);

router.get('/id/:id', productController.detalle);

router.get('/add', productController.add);

router.get('/edit', productController.edit);

router.get('/search', productController.search);

module.exports = router;