
module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idProducto: {
            type: dataTypes.INTEGER // Foreign Key
        },
        idUsuario: {
            type: dataTypes.INTEGER // Foreign Key
        },
        comentario: {
            type: dataTypes.STRING(1000)
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true
    };

    const Comentario = sequelize.define(alias, cols, config);

    // Relaciones
    Comentario.associate = function(models) {
        // Un comentario pertenece a un producto
        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "idProducto"
        });
        
        // Un comentario pertenece a un usuario 
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "idUsuario"
        });
    }

    return Comentario;
};