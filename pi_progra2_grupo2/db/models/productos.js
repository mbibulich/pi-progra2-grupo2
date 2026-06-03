module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";

    let cols = {
        idProducto: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING(500)
        },
        descripcion: {
            type: dataTypes.STRING(500)
        },
        idUsuario: {
            type: dataTypes.INTEGER // Foreign Key
        },
        fotoProducto: {
            type: dataTypes.STRING(500)
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        
    };

    const Producto = sequelize.define(alias, cols, config);

    // Relaciones
    Producto.associate = function(models) {
        // Un producto pertenece a un usuario (N:1)
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "idUsuario"
        });
        
        // Un producto tiene muchos comentarios (1:N)
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idProducto"
        });
    }

    return Producto;
};
