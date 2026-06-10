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
                return res.render("index", { product: resultados })
            })
            .catch(function (error) {
                return res.send(error);
            })
    },

    detalle: function (req, res) {
        db.Producto.findByPk(req.params.id, {
            include: [
                {
                    association: "comentarios",
                    include: [{ association: "usuario" }]
                }]
        })
            .then(function (producto) {
                if (!producto) {
                    return res.send("Producto no encontrado")
                }
                return res.render('product', { product: producto})
            })                                                    
            .catch(function (error) {
                return res.send(error)
            })
    },

    add: function (req, res) {
        res.render('product-add')
    },

    addProduct: function (req, res) {

        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }
    
        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fotoProducto: req.body.fotoProducto,
            idUsuario: req.session.user.id
        })
            .then(function (resultado) {
                return res.redirect('/users/profile/id/'+req.session.user.id);
            })

            .catch(function (error) {
                return res.send(error);
            });
    },

    edit: function (req, res) {
         db.Producto.findByPk(req.params.id)
            .then(function (resultado) {
                return res.render("product-edit", { product: resultado });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    editProduct: function (req, res) {
        db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            foto: req.body.fotoProducto
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function (resultado) {
                return res.redirect('/');
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    delete: function (req, res) {
        db.Producto.findByPk(req.params.id)
            .then(function (resultado) {
                return res.render("product-edit", { product: resultado });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    deleteProduct: function (req, res) {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (resultado) {
                return res.redirect('/profile');
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    search: function (req, res) {
        let palabraBuscada = req.query.search;

        db.Producto.findAll({
            where: {
                nombre: {
                    [op.like]: '%' + palabraBuscada + '%'
                }
            },
            include: [
                { association: "comentarios" },
                { association: "usuario" }
            ]
        })
            .then(function (resultados) {
                return res.render("search-results", { product: resultados });
            })
            .catch(function (error) {
                return res.send(error);
            });
    }
}

module.exports = controller;

