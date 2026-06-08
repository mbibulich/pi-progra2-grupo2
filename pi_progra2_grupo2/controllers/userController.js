const data = require("../db/models");

const controller = {
    register: function (req, res) {
        res.render("register", {logueado:false});
    },
    processRegister: function(req, res) {
        let form = req.body
        let passEncriptada = bcrypt.hashSync(form.password, 10)
        db.User.create({
            nombre: form.name,
            email: form.email,
            contrasena: passEncriptada
        })
            .then(function (user) {
                return res.redirect('/')
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
    login: function (req, res) {
        return res.render("login",{logueado: false});
    },
    processLogin: function(req, res){
        let emailLog = req.body.email
        db.User.findOne({
            where: [{ email: emailLog }]
        })
        .then(function (user) {
                let check = bcrypt.compareSync(req.body.password, user.password)
                if (user == null) {
                    return res.send('no existe el usuario')
                }
                else if (check) {
                    req.session.user = user
                    return res.redirect("/")
                }
                 else {
                    return res.send('contrasena incorrecta')
                }
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
    profile: function (req, res) {
        let usuario = data.usuario;
        let productosUsuario = data.lista;
        return res.render("profile", {usuario: usuario, productos: productosUsuario, logueado: true});
    }
}

module.exports = controller;