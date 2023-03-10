var express = require('express');
var router = express.Router();
const multer = require('multer')//usado para addproduct enviar img trabaja con datos o archivos
const path = require('path')

const addProductValidator = require('../validations/addProductValidator')

//configurar multer para q funcione
const storage = multer.diskStorage({
    destination : (req,file,callback) => {//donde se guarda
        callback(null,'public/img')
    },
    filename : (req,file,callback) => {//y de que manera se guarda
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})

const {add,details,search, save, edit, update, destroy} = require('../controllers/productsController');



router.get('/add',add);
//post enviar datos al formulario de addproduct
router.post('/add',upload.single('imagen'),addProductValidator,save)
router.get('/details/:id',details)
router.get('/edit/:id',edit)
router.get('/search',search)

router.put('/edit/:id',update)
router.delete('/delete/:id',destroy)




module.exports = router;