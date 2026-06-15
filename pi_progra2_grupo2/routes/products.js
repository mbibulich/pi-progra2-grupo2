var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");
const { body } = require('express-validator');

let validationsProducto = [
    body('nombre')
        .notEmpty().withMessage('Debes completar el nombre del producto').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('descripcion')
        .notEmpty().withMessage('Debes completar la descripción'),
    body('fotoProducto')
        .notEmpty().withMessage('Debes indicar el nombre de la imagen')
]

router.get('/', productController.index);

router.get('/id/:id', productController.detalle);

router.get('/add', productController.add);
router.post('/add', validationsProducto, productController.addProduct);

router.get('/:id/edit', productController.edit);
router.post('/:id/edit', validationsProducto, productController.editProduct);

router.post('/:id/eliminar', productController.deleteProduct);

router.get('/search', productController.search);

router.post('/id/:id/comentario', productController.addComentario);


module.exports = router;