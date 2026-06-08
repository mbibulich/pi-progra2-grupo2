var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const db = require("../db/models");
const bcrypt = require('bcryptjs');
const { body } = require('express-validator');

let validations = [
    body('name')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
    body('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debe ingresar un email válido')
        .custom(function(value) {
            return db.Usuario.findOne({ 
                where: { email: value } 
            })
            .then(function(user) {
                if (user) { 
                    throw new Error('El email ingresado ya existe.');
                }
            });
    }),
    body('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 3 }).withMessage('La contraseña debe tener al menos 3 caracteres')
        .custom(function(value, { req }) {
            return db.Usuario.findOne({ 
                where: { email: req.body.email } 
            })
            .then(function(user) {
                if (user) { 
                    if (!bcrypt.compareSync(value, user.password)) {
                        throw new Error('La contraseña es incorrecta.');
                    }
                }
            });
    }) 
]

/* GET users listing. */
router.get('/register', userController.register);
router.post('/register', validations, userController.processRegister);

router.get('/login', userController.login);
router.post('/login', validations, userController.processLogin);

router.get('/profile', userController.profile);

module.exports = router;