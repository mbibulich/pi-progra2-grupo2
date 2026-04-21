const data = require("../db/index");

const controller = {
    index: function (req, res) {
        return res.render("profile");
    },
    register: function (req, res) {
        res.render("register", {login:false});
    },
    login: function (req, res) {
        res.render("login",{login: false});
    },
    profile: function (req, res) {
        let usuario = data.usuario;
        let productosUsuario = data.lista;
        return res.render("profile", {usuario: usuario, productos: productosUsuario});
    }
}

module.exports = controller;