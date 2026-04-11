const data = require("../db/index");
const controller = {
    index: function (req, res) {
        return res.render('products', { products: data.lista });
    },

    detalle: function (req, res) {
        let id = req.params.id;
        let productoEncontrado = false;
        for (let i = 0; i < data.lista.length; i++) {
            if (id == data.lista[i].id) {
                productoEncontrado = data.lista[i];
                break;
            }
        }
        if (productoEncontrado == false) {
            return res.send("Producto no encontrado");
        }
        return res.render('product-detail', {product: productoEncontrado});
    }
}

module.exports = controller;