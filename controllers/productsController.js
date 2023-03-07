const fs = require('fs') //necesito el fs para guardar lo de save en mi json
const path = require('path')

const productosdb = require('../data/productsdb')

const categorias = require('../data/categoriasdb')

module.exports = {
    add : (req,res) => {
        //res.send(categorias)
        return res.render('addProducts',{
            categorias
        })
    },

    //ruta post el save para el formulario de addproduct
    save : (req,res) => {
        //res.send(req.body) la info de POST que recibo del formulario va por BODY
        const {titulo,categoria,precio} = req.body

        //mi objeto literal q capturo los datos del formulario
        let producto = {
            id : productosdb[productosdb.length - 1].id + 1,
            titulo,
            imagen : ['default-imagen.png'],
            categoria,
            precio
        }
        productosdb.push(producto)
        //return res.send(productosdb) //para verlo como json en el navegador lo nuevo q mando
    
        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(productosdb,null,2),'utf-8')
        return res.redirect('/')
    
    
    },
    details : (req,res) => {
                                                                                    //cuando va la ruta un dato es un PARAMS
        let producto = productosdb.find(producto => producto.id === req.params.id) //asi si el id q esta en mi data es un string 
                                                                                   // +req.params.id asi si el id de mi data es un number 01 02 03 sin comillas

        return res.render('details',{
            producto
        })
    },
    search : (req,res) =>{
        //res.send(req.query)
        let resultado = productosdb.filter(producto => producto.titulo === req.query.search)//la info que recibo por GET es QUERY
        return res.render('searchResult',{
            resultado,
        })
    },

    edit : (req,res) => {
        let producto = productosdb.find(producto => producto.id === req.params.id)
        return res.render('editProduct',{
            producto,
            productosdb,
            categorias
        })
    },
    update : (req,res) =>{
        res.send(req.body)
    }

}