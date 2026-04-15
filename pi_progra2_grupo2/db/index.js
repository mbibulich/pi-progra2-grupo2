const data = {
    usuario: {
        id: 1,
        nombre: "Juan",
        email: "juan@gmail.com",
        password: "1234",
        imagen: "profile-default.png"
    },

    lista: [
        {
            id: 1,
            nombre: "Buzo Hoodie Oversize",
            descripcion: "Buzo con capucha y bolsillo canguro en color arena melange.",
            img: "/images/products/buzo1.jpg",
            comentarios: [
                { usuario: "Juan", texto: "Muy cómodo y calentito", imagen: "profile-default.png" },
                { usuario: "Ana", texto: "Me encantó el diseño", imagen: "profile-default.png" }
            ]
        },
        {
            id: 2,
            nombre: "Buzo Quarter-Zip Auckland",
            descripcion: "Buzo gris con cuello alto, cierre medio y bordado frontal.",
            img: "/images/products/buzo2.jpg",
            comentarios: [
                { usuario: "Lucía", texto: "Súper elegante", imagen: "profile-default.png" },
                { usuario: "Martín", texto: "Buena calidad de tela", imagen: "profile-default.png" }
            ]
        },
        {
            id: 3,
            nombre: "Jean Wide Leg Celeste",
            descripcion: "Pantalón de denim claro con corte ancho y lavado localizado.",
            img: "/images/products/jeanHombre1.jpg",
            comentarios: [
                { usuario: "Sofía", texto: "Me queda perfecto", imagen: "profile-default.png" }
            ]
        },
        {
            id: 4,
            nombre: "Jean Baggy Gris Oscuro",
            descripcion: "Pantalón de jean gris gastado con costuras decorativas.",
            img: "/images/products/jeanHombre2.jpg",
            comentarios: [
                { usuario: "Valen", texto: "El fit es increíble", imagen: "profile-default.png" }
            ]
        },
        {
            id: 5,
            nombre: "Jean Joya Wide Leg",
            descripcion: "Denim celeste decorado con apliques de strass en todo el frente.",
            img: "/images/products/jeanMujer.jpg",
            comentarios: [
                { usuario: "Caro", texto: "Brilla muchísimo, me encanta", imagen: "profile-default.png" }
            ]
        },
        {
            id: 6,
            nombre: "Remera Boxy Fit Grafito",
            descripcion: "Remera gris oscuro con estampa tipo rock y terminaciones al corte.",
            img: "/images/products/remera1.jpg",
            comentarios: [
                { usuario: "Ema", texto: "Muy canchera", imagen: "profile-default.png" }
            ]
        },
        {
            id: 7,
            nombre: "Remera Heavy Cotton Negra",
            descripcion: "Remera de algodón pesado con estampa gráfica en rojo y blanco.",
            img: "/images/products/remera2.jpg",
            comentarios: [
                { usuario: "Tomás", texto: "La estampa es tremenda", imagen: "profile-default.png" }
            ]
        },
        {
            id: 8,
            nombre: "Short de Lino Negro",
            descripcion: "Pantalón corto de lino con cintura elástica y cordón ajustable.",
            img: "/images/products/short1.jpg",
            comentarios: [
                { usuario: "Leo", texto: "Muy fresco para el verano", imagen: "profile-default.png" }
            ]
        },
        {
            id: 9,
            nombre: "Short de Lino Off-White",
            descripcion: "Short liviano en tono crudo con detalle de pinzas frontales.",
            img: "/images/products/short2.jpg",
            comentarios: [
                { usuario: "Mati", texto: "Súper cómodo", imagen: "profile-default.png" }
            ]
        },
        {
            id: 10,
            nombre: "Vestido Largo Halter",
            descripcion: "Vestido de fiesta negro con cuello halter y detalle de aro metálico.",
            img: "/images/products/vestido.jpg",
            comentarios: [
                { usuario: "Sofi", texto: "Perfecto para una fiesta", imagen: "profile-default.png" }
            ]
        }
    ]
};

module.exports = data;