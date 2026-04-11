const data = require("../db/index");

const controller = {
    index: function (req, res) {
         return  res.render('index', {products: data.lista});
    }
}

module.exports = controller;
