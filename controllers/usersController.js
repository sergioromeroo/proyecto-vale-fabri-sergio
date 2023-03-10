const {usuariosdb,guardar} = require('../data/usersdb')
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')



module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    processRegister: (req,res) =>{
        let errors = validationResult(req)
        let {nombre,email,contrasenia} = req.body;
        if(errors.isEmpty()){
            let usuario = {
                id : usuariosdb.length > 0 ? usuariosdb[usuariosdb.length - 1].id + 1 : 1,
                nombre,
                email,
                contrasenia: bcrypt.hashSync(contrasenia,10)
            }
            usuariosdb.push(usuario)
            guardar(usuariosdb)


            return res.redirect('/')
        }else{
            return res.render('register',{
                
                errores : errors.mapped(),
                old : req.body
            })
        }

    },



    login : (req,res) => {
        return res.render('login')
    }
}