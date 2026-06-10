const db = require("../db/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

const controller = {
    register: function (req, res) {
        res.render("register", { logueado: false });
    },
    processRegister: function (req, res) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            // No hay errores, seguimos adelante
            return res.send(errors.mapped());
        }
        let form = req.body
        let passEncriptada = bcrypt.hashSync(form.password, 10)
        db.Usuario.create({
            nombre: form.name,
            email: form.email,
            contrasena: passEncriptada
        })
            .then(function (user) {
                return res.redirect('/users/login')
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },
    processLogin: function (req, res) {
        let emailLog = req.body.email
        db.Usuario.findOne({
            where: { email: emailLog }
        })
            .then(function (user) {
                if (user == undefined) {
                    return res.send('no existe el usuario')
                }
                let check = bcrypt.compareSync(req.body.password, user.contrasena)
                if (check) {
                    req.session.user = user
                    if (req.body.remember != undefined) {
                        res.cookie('user', user, { maxAge: 1000 * 60 * 5 })
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
    logout: function (req, res) {
        req.session.destroy()
        res.clearCookie('user')
        return res.redirect('/'); 
    },

    profile: function (req, res) {
        db.Usuario.findByPk(req.params.id, {
            include: [
                {
                    association: "productos",
                    include: [{ association: "comentarios" }]
                }]
        })
            .then(function (usuario) {

                return res.render('profile', { usuario: usuario })
            })
            .catch(function (error) {
                return res.send(error.message);
                return res.send(error)

            })
    }
}




module.exports = controller;