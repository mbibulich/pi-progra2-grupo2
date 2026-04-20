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
    id_usuario INT UNSIGNED  NOT NULL,
    fotoProducto VARCHAR(500),

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_producto INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    comentario VARCHAR(1000),

    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (id_producto) REFERENCES productos(idProducto),
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
/*------------------------------------------------USUARIOS--------------------------------------------------------*/
INSERT INTO usuarios VALUES (DEFAULT, 'Juan','juan@gmail.com', 'juan123','profile-default.png');
INSERT INTO usuarios VALUES (DEFAULT, 'Sofia','sofia@gmail.com', 'sofia123','profile-default.png');
INSERT INTO usuarios VALUES (DEFAULT, 'Valen','valen@gmail.com', 'valen123','profile-default.png');
INSERT INTO usuarios VALUES (DEFAULT, 'Caro','Caro@gmail.com', 'caro123','profile-default.png');
INSERT INTO usuarios VALUES (DEFAULT, 'Ema','ema@gmail.com', 'ema123','profile-default.png')

/*------------------------------------------------COMENTARIOS--------------------------------------------------------*/
-- Producto 1: Buzo Hoodie Oversize
INSERT INTO comentarios VALUES (DEFAULT, '1', '1', 'La tela es súper gruesa, muy abrigado.');
INSERT INTO comentarios VALUES (DEFAULT, '1', '2', 'El corte oversize es perfecto, me encanta.');
INSERT INTO comentarios VALUES (DEFAULT, '1', '3', 'El color arena es idéntico a las fotos.');

-- Producto 2: Buzo Quarter-Zip Auckland
INSERT INTO comentarios VALUES (DEFAULT, '2', '4', 'El cierre funciona perfecto, se ve muy elegante.');
INSERT INTO comentarios VALUES (DEFAULT, '2', '5', 'Excelente calidad de los bordados frontales.');
INSERT INTO comentarios VALUES (DEFAULT, '2', '1', 'Un básico que combina con todo, muy conforme.');

-- Producto 3: Jean Wide Leg Celeste
INSERT INTO comentarios VALUES (DEFAULT, '3', '2', 'El calce es muy cómodo y el tiro es alto.');
INSERT INTO comentarios VALUES (DEFAULT, '3', '3', 'El lavado celeste es muy lindo para el día.');
INSERT INTO comentarios VALUES (DEFAULT, '3', '4', 'Me quedó un poco largo, pero la calidad es 10/10.');

-- Producto 4: Jean Baggy Gris Oscuro
INSERT INTO comentarios VALUES (DEFAULT, '4', '5', 'El color gris gastado se ve muy canchero.');
INSERT INTO comentarios VALUES (DEFAULT, '4', '1', 'Las costuras decorativas le dan un toque especial.');
INSERT INTO comentarios VALUES (DEFAULT, '4', '2', 'Tela resistente, se nota que va a durar mucho.');

-- Producto 5: Jean Joya Wide Leg
INSERT INTO comentarios VALUES (DEFAULT, '5', '3', 'Los apliques de strass brillan un montón.');
INSERT INTO comentarios VALUES (DEFAULT, '5', '4', 'Es la prenda estrella de mi placard ahora.');
INSERT INTO comentarios VALUES (DEFAULT, '5', '5', 'Lo usé para salir y recibí mil cumplidos.');

-- Producto 6: Remera Boxy Fit Grafito
INSERT INTO comentarios VALUES (DEFAULT, '6', '1', 'La estampa tipo rock está muy bien lograda.');
INSERT INTO comentarios VALUES (DEFAULT, '6', '2', 'El corte boxy queda muy bien con jeans anchos.');
INSERT INTO comentarios VALUES (DEFAULT, '6', '3', 'Algodón de buena calidad, no se achicó al lavar.');

-- Producto 7: Remera Heavy Cotton Negra
INSERT INTO comentarios VALUES (DEFAULT, '7', '4', 'El algodón pesado se siente premium.');
INSERT INTO comentarios VALUES (DEFAULT, '7', '5', 'Los colores de la estampa son muy vibrantes.');
INSERT INTO comentarios VALUES (DEFAULT, '7', '1', 'Excelente relación precio-calidad.');

-- Producto 8: Short de Lino Negro
INSERT INTO comentarios VALUES (DEFAULT, '8', '2', 'Súper fresco, ideal para los días de calor.');
INSERT INTO comentarios VALUES (DEFAULT, '8', '3', 'La cintura elástica lo hace muy cómodo.');
INSERT INTO comentarios VALUES (DEFAULT, '8', '4', 'El cordón ajustable es muy práctico.');

-- Producto 9: Short de Lino Off-White
INSERT INTO comentarios VALUES (DEFAULT, '9', '5', 'El tono crudo es muy fino y fácil de combinar.');
INSERT INTO comentarios VALUES (DEFAULT, '9', '1', 'Las pinzas frontales le dan un toque formal.');
INSERT INTO comentarios VALUES (DEFAULT, '9', '2', 'No trasluce nada, que era mi mayor miedo.');

-- Producto 10: Vestido Largo Halter
INSERT INTO comentarios VALUES (DEFAULT, '10', '3', 'El detalle del aro metálico es hermoso.');
INSERT INTO comentarios VALUES (DEFAULT, '10', '4', 'Me quedó pintado, la tabla de talles es precisa.');
INSERT INTO comentarios VALUES (DEFAULT, '10', '5', 'La caída de la tela es espectacular.');




