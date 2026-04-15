CREATE SCHEMA proyectoGrupo2;
USE proyectoGrupo2;

CREATE TABLE usuarios (
	id INT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR (100) NOT NULL
);

CREATE TABLE productos (
	idProducto INT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    nombre VARCHAR(500),
    descripcion VARCHAR(500),
    usuario VARCHAR(500),
    id_usuario INT UNSIGNED UNIQUE NOT NULL,
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    id_producto INT UNSIGNED UNIQUE NOT NULL,
    id_usuario INT UNSIGNED UNIQUE NOT NULL,
    comentario VARCHAR(500),
    
    FOREIGN KEY (id_producto) REFERENCES id(productos),
	FOREIGN KEY (id_usuario) REFERENCES id(usuarios)
)









