const productos_db = require('../data/productsdb')

module.exports = {
    index : (req,res) => {
        //res.send(productos_db) con esto lo veo en chrome
        return res.render('index',{
            productos : productos_db, //le cambio nombre a mi array
            abrigos : productos_db.filter(producto => producto.categoria === "abrigos"),
            camisetas : productos_db.filter(producto => producto.categoria === "camisetas"),
            pantalones : productos_db.filter(producto => producto.categoria === "pantalon"),
        })
    },

}