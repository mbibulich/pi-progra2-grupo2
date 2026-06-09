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
               return res.render("index", { product: resultados})
            })
            .catch(function (error) {
                return res.send(error);
            })
        },
}

module.exports = controller;
 