const db = require('../db/models')
const op = db.Sequelize.Op
const { validationResult } = require("express-validator");


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
                },
                {
                    association: "usuario"
                }
            ]
        })
            .then(function (producto) {
                if (!producto) {
                    return res.send("Producto no encontrado")
                }
                return res.render('product', { product: producto })
            })
            .catch(function (error) {
                return res.send(error)
            })
    },

    add: function (req, res) {

        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        }

        res.render('product-add')
    },

    addProduct: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login')
        }

        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send(errors.mapped())
        }

        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fotoProducto: req.body.fotoProducto,
            idUsuario: req.session.user.id
        })
            .then(function (resultado) {
                return res.redirect('/users/profile/id/' + req.session.user.id);
            })

            .catch(function (error) {
                return res.send(error);
            });
    },

    edit: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect("/users/login");
        }

        db.Producto.findByPk(req.params.id)
            .then(function (resultado) {
                if (req.session.user.id != resultado.idUsuario) {
                    return res.redirect("/");
                }
                return res.render("product-edit", { product: resultado });
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    editProduct: function (req, res) {

        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send(errors.mapped())
        }

        db.Producto.update({
            fotoProducto: req.body.fotoProducto,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
        }, {
            where: {
                idProducto: req.params.id
            }
        })
            .then(function (resultado) {
                return res.redirect('/users/profile/id/' + req.session.user.id);
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    deleteProduct: function (req, res) {

        if (req.session.user == undefined) {
            return res.redirect("/users/login");
        }
// hay que buscar el producto primero para poder chequear el id del usuario 
        db.Producto.findByPk(req.params.id)
            .then(function (producto) {
                if (req.session.user.id != producto.idUsuario) {
                    return res.redirect("/");
                }

                return db.Comentario.destroy({
                    where: { idProducto: req.params.id }
                });
            })
// si no ponemos el return antes de terminar cada "then", 
// se inicia el prox "then" aunque no haya terminado el anteriror. 
// en este caso si no ponemos el the despues de eliminar el comentario
// pasa a eliminar el producto y puede dar error si hay muchos comentarios

            .then(function () {
                return db.Producto.destroy({
                    where: { idProducto: req.params.id }
                });
            })
            .then(function () {
                return res.redirect('/users/profile/id/' + req.session.user.id);
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

    },

    addComentario: function (req, res) {
        if (req.session.user == undefined) {
            return res.redirect("/users/login")
        }
        db.Comentario.create({
            comentario: req.body.comentario,
            idUsuario: req.session.user.id,
            idProducto: req.params.id
        })
            .then(function () {
                return res.redirect("/products/id/" + req.params.id)
            })
            .catch(function (error) {
                return res.send(error)
            })
    }
}

module.exports = controller;