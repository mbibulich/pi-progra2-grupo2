const products = require("../db/index");
const controller = {
    index: function (req, res) {

        return res.send("hola")
       return  res.render('index', {products: products.lista});
    },
    detalle: function (req, res) {
        let id = req.params.id;
        let bandaEncontrada = '';
        for (let i = 0; i < bandas.lista.length; i++) {
            if (id == bandas.lista[i].id) {
                
                bandaEncontrada = bandas.lista[i];
                break;
            }
        }
        res.send(bandaEncontrada);
    }
}

module.exports = controller;