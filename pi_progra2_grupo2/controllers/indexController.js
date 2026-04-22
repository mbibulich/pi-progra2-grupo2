const data = require("../db/index");

const controller = {
    index: function (req, res) {
        let usuario = data.usuario;
        return  res.render('index', {products: data.lista, usuario: usuario, logueado: true});
    }
}

module.exports = controller;
