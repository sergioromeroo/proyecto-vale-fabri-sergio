var express = require('express');
var router = express.Router();

const {add,details,search, save, edit, update} = require('../controllers/productsController');


router.get('/add',add);
//post enviar datos al formulario de addproduct
router.post('/add',save)
router.get('/details/:id',details)
router.get('/edit/:id',edit)
router.get('/search',search)

router.put('/edit/:id',update)




module.exports = router;