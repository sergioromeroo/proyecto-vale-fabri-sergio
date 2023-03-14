var express = require('express');
var router = express.Router();

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')

const {register,login,processRegister,processLogin, logout} = require('../controllers/usersController')

/* en los ancors tengo q poner /users/login  o  /register ese users esta en app.js*/
router.get('/register',register)
router.post('/register',registerValidator,processRegister)
router.get('/login',login)
router.post('/login',loginValidator,processLogin)
router.get('/logout',logout);


module.exports = router;
