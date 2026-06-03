var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/register', userController.register);
router.post('/register', userController.processRegister);
router.get('/login', userController.login);
router.post('/login', userController.processLogin);
router.get('/profile', userController.profile);
router.get('/edit/:id', userController.edit);
router.post('/edit/:id', userController.update);
router.get('/logout', userController.logout);
router.post('/delete/:id', userController.delete);

module.exports = router;