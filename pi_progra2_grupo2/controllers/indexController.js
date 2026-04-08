const products = require("../db/index");

const controller = {
    index: function (req, res) {
         return  res.render('index', {products: products.lista});
    }
}

module.exports = controller;
