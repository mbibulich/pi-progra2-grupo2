const bandas = require("../db/index");
const controller = {
    index: function (req, res) {
        res.send(bandas.lista);
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