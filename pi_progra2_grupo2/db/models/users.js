module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING(100)
        },
        email: {
            type: dataTypes.STRING(100)
        },
        contrasena: {
            type: dataTypes.STRING(100)
        },
        fotoPerfil: {
            type: dataTypes.STRING(100)
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true 
    };

    const Usuario = sequelize.define(alias, cols, config);

    // Relaciones
    Usuario.associate = function(models) {
        // Un usuario tiene muchos productos (1:N)
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "idUsuario"
        });
        
        // Un usuario tiene muchos comentarios (1:N)
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idUsuario"
        });
    }

    return Usuario;
};