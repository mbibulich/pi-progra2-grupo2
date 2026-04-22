CREATE SCHEMA proyectoGrupo2;
USE proyectoGrupo2;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR (100) NOT NULL,
    fotoPerfil VARCHAR (100),

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	idProducto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(500),
    descripcion VARCHAR(500),
    idUsuario INT UNSIGNED  NOT NULL,
    fotoProducto VARCHAR(500),

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    comentario VARCHAR(1000),

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (idProducto) REFERENCES productos(idProducto),
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);
/*------------------------------------------------USUARIOS--------------------------------------------------------*/
-- Se agregan las columnas (nombre, email, contrasena, fotoPerfil) para que los timestamps se generen solos
INSERT INTO usuarios (nombre, email, contrasena, fotoPerfil) VALUES ('Juan','juan@gmail.com', 'juan123','profile-default.png');
INSERT INTO usuarios (nombre, email, contrasena, fotoPerfil) VALUES ('Sofia','sofia@gmail.com', 'sofia123','profile-default.png');
INSERT INTO usuarios (nombre, email, contrasena, fotoPerfil) VALUES ('Valen','valen@gmail.com', 'valen123','profile-default.png');
INSERT INTO usuarios (nombre, email, contrasena, fotoPerfil) VALUES ('Caro','Caro@gmail.com', 'caro123','profile-default.png');
INSERT INTO usuarios (nombre, email, contrasena, fotoPerfil) VALUES ('Ema','ema@gmail.com', 'ema123','profile-default.png');

/*------------------------------------------------PRODUCTOS--------------------------------------------------------*/
-- Se agregan las columnas correspondientes
/*------------------------------------------------PRODUCTOS--------------------------------------------------------*/
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Buzo Hoodie Oversize', 'Buzo con capucha y bolsillo canguro en color arena melange.', 4, 'buzo1.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Buzo Quarter-Zip Auckland', 'Buzo gris con cuello alto, cierre medio y bordado frontal.', 1, 'buzo2.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Jean Wide Leg Celeste', 'Pantalón de denim claro con corte ancho y lavado localizado.', 2, 'jeanHombre1.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Jean Baggy Gris Oscuro', 'Pantalón de jean gris gastado con costuras decorativas.', 4, 'jeanHombre2.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Jean Joya Wide Leg', 'Denim celeste decorado con apliques de strass en todo el frente.', 2, 'jeanMujer.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Remera Boxy Fit Grafito', 'Remera gris oscuro con estampa tipo rock y terminaciones al corte.', 3, 'remera1.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Remera Heavy Cotton Negra', 'Remera de algodón pesado con estampa gráfica en rojo y blanco.', 4, 'remera2.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Short de Lino Negro', 'Pantalón corto de lino con cintura elástica y cordón ajustable.', 1, 'short1.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Short de Lino Off-White', 'Short liviano en tono crudo con detalle de pinzas frontales.', 4, 'short2.jpg');
INSERT INTO productos ( nombre, descripcion, idUsuario, fotoProducto) VALUES ( 'Vestido Largo Halter', 'Vestido de fiesta negro con cuello halter y detalle de aro metálico.', 1, 'vestido.jpg');

/*------------------------------------------------COMENTARIOS--------------------------------------------------------*/
-- Producto 1: Buzo Hoodie Oversize
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (1, 1, 'La tela es súper gruesa, muy abrigado.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (1, 2, 'El corte oversize es perfecto, me encanta.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (1, 3, 'El color arena es idéntico a las fotos.');

-- Producto 2: Buzo Quarter-Zip Auckland
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (2, 4, 'El cierre funciona perfecto, se ve muy elegante.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (2, 5, 'Excelente calidad de los bordados frontales.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (2, 2, 'Un básico que combina con todo, muy conforme.');

-- Producto 3: Jean Wide Leg Celeste
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (3, 5, 'El calce es muy cómodo y el tiro es alto.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (3, 3, 'El lavado celeste es muy lindo para el día.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (3, 4, 'Me quedó un poco largo, pero la calidad es 10/10.');

-- Producto 4: Jean Baggy Gris Oscuro
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (4, 5, 'El color gris gastado se ve muy canchero.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (4, 1, 'Las costuras decorativas le dan un toque especial.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (4, 2, 'Tela resistente, se nota que va a durar mucho.');

-- Producto 5: Jean Joya Wide Leg
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (5, 3, 'Los apliques de strass brillan un montón.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (5, 4, 'Es la prenda estrella de mi placard ahora.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (5, 5, 'Lo usé para salir y recibí mil cumplidos.');

-- Producto 6: Remera Boxy Fit Grafito
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (6, 1, 'La estampa tipo rock está muy bien lograda.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (6, 2, 'El corte boxy queda muy bien con jeans anchos.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (6, 4, 'Algodón de buena calidad, no se achicó al lavar.');

-- Producto 7: Remera Heavy Cotton Negra
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (7, 2, 'El algodón pesado se siente premium.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (7, 5, 'Los colores de la estampa son muy vibrantes.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (7, 1, 'Excelente relación precio-calidad.');

-- Producto 8: Short de Lino Negro
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (8, 2, 'Súper fresco, ideal para los días de calor.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (8, 3, 'La cintura elástica lo hace muy cómodo.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (8, 4, 'El cordón ajustable es muy práctico.');

-- Producto 9: Short de Lino Off-White
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (9, 5, 'El tono crudo es muy fino y fácil de combinar.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (9, 1, 'Las pinzas frontales le dan un toque formal.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (9, 2, 'No trasluce nada, que era mi mayor miedo.');

-- Producto 10: Vestido Largo Halter
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (10, 3, 'El detalle del aro metálico es hermoso.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (10, 4, 'Me quedó pintado, la tabla de talles es precisa.');
INSERT INTO comentarios (idProducto, idUsuario, comentario) VALUES (10, 5, 'La caída de la tela es espectacular.');