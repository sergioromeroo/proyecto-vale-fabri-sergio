var express = require('express');
var router = express.Router();

const {register,login} = require('../controllers/usersController')

/* en los ancors tengo q poner /users/login  o  /register ese users esta en app.js*/
router.get('/register',register)
router.get('/login',login)

module.exports = router;
