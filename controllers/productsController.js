const productosdetail = require('../data/productsdb')

const categorias = require('../data/categoriasdb')

module.exports = {
    add : (req,res) => {
        //res.send(categorias)
        return res.render('addProducts',{
            categorias
        })
    },
    details : (req,res) => {

        let producto = productosdetail.find(producto => producto.id === req.params.id) //asi si el id q esta en mi data es un string 
                                                                                   // +req.params.id asi si el id de mi data es un number 01 02 03 sin comillas

        return res.render('details',{
            producto
        })
    },
    search : (req,res) =>{
        //res.send(req.query)
        let resultado = productosdetail.filter(producto => producto.titulo === req.query.search)
        return res.render('searchResult',{
            resultado,
        })
    }

}