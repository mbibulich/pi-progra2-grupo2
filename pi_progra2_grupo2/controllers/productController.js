const db = require('../db/models')
const op = db.Sequelize.Op

const controller = {
    index: function (req, res) {
        db.Producto.findAll({ 
            include: [
                { association: "comentarios" },
                { association: "usuario" } 
            ]
        })
        .then(function (resultados) {
           return res.render("index", { productos: resultados })
        })
        .catch(function (error) {
            return res.send(error);
        })
    },

    detalle: function (req, res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {association: "comentarios",
                    include: [{ association: "usuario" }]
                 }]
        })
        .then(function (producto) {
            if (!producto) {
                return res.send("Producto no encontrado")
            }
            return res.render('product', { product: producto, logueado: true, usuario: { nombre: "Juan", fotoPerfil: "profile-default.png" } })
        })                                                    // paso logueado y usuario asi para que no me de error por ahora
        .catch(function (error) {
            return res.send(error)
        })
    },

    add: function (req, res) {
        let usuario = data.usuario;
        res.render('product-add', {usuario: usuario, logueado: true})
    },

    edit: function (req, res) {
        res.render('product-edit')
    },

    search: function (req, res) {
        let usuario = data.usuario;
        res.render('search-results', { products: data.lista, usuario: usuario, logueado: true});
}
}

module.exports = controller;