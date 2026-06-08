const db = require("../db/models");

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
        if (req.session.user != undefined){
            return res.redirect('/')
        } else{
            return res.render('login')
        }
        return res.render("login",{logueado: false});
    },
    processLogin: function(req, res){
        let emailLog = req.body.email
        db.User.findOne({
            where: [{ email: emailLog }]
        })
        .then(function (user) {
                if (user == null) {
                    return res.send('no existe el usuario')
                }
                let check = bcrypt.compareSync(req.body.password, user.contrasena)
                if (check) {
                    req.session.user = user
                    if (req.body.remember != undefined){
                        res.cookie('user', user, {maxAge: 1000 * 60 * 5})
                    }
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

    logout: function(req, res){
        req.session.destroy()
        res.clearcookie('')
    },


    profile: function (req, res) {
        let usuario = data.usuario;
        let productosUsuario = data.lista;
        return res.render("profile", {usuario: usuario, productos: productosUsuario, logueado: true});
    }
}

module.exports = controller;