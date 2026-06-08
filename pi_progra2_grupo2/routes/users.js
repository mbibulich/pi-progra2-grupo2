var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/register', userController.register);
router.post('/register', userController.processRegister);
router.get('/login', userController.login);
router.post('/login', userController.processLogin);
router.get('/profile', userController.profile);

module.exports = router;