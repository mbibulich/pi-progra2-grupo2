var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get('/', productController.index);

router.get('/id/:id', productController.detalle);

router.get('/add', productController.add);
router.post('/add', productController.addProduct);

router.get('/:id/edit', productController.edit);
router.post('/:id/edit', productController.editProduct);
router.post('/:id/eliminar', productController.deleteProduct);

router.get('/search', productController.search);

router.post('/id/:id/comentario', productController.addComentario);


module.exports = router;