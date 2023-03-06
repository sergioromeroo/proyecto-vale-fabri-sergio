const productos_db = require('../data/productsdb')

module.exports = {
    index : (req,res) => {
        //res.send(productos_db) con esto lo veo en chrome
        return res.render('index',{
            productos : productos_db //le cambio nombre a mi array
        })
    },

}