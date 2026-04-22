const data = require("../db/index");

const controller = {
    register: function (req, res) {
        res.render("register", {logueado:false});
    },
    login: function (req, res) {
        res.render("login",{logueado: false});
    },
    profile: function (req, res) {
        let usuario = data.usuario;
        let productosUsuario = data.lista;
        return res.render("profile", {usuario: usuario, productos: productosUsuario, logueado: true});
    }
}

module.exports = controller;