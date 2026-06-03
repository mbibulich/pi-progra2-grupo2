var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get('/', productController.index);

router.get('/id/:id', productController.detalle);

router.get('/add', productController.add);
router.post('/add', productController.addProduct);

router.get('/edit/:id', productController.edit);
router.post('/edit/:id', productController.editProduct);

router.get('/eliminar/:id', productController.delete)
router.post('/eliminar/:id', productController.deleteProduct)

router.get('/search', productController.search);

module.exports = router;