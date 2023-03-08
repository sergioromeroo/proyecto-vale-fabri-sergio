const {productosdb} = require('../data/productsdb')

module.exports = {
    index : (req,res) => {
        //res.send(productosdb) con esto lo veo en chrome
        return res.render('index',{
            productos : productosdb, //le cambio nombre a mi array
            abrigos : productosdb.filter(producto => producto.categoria === "abrigos"),
            camisetas : productosdb.filter(producto => producto.categoria === "camisetas"),
            pantalones : productosdb.filter(producto => producto.categoria === "pantalon"),
        })
    },

}