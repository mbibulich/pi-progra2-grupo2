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
        return res.render('product', { product: productoEncontrado });
    },

    add: function (req, res) {
        let usuario = data.usuario;
        res.render('product-add', {usuario: usuario})
    },

    edit: function (req, res) {
        res.render('product-edit')
    },

    search: function (req, res) {
        let usuario = data.usuario;
        res.render('search-results', { products: data.lista, usuario: usuario});
}
}

module.exports = controller;