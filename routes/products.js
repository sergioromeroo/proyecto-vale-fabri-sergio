var express = require('express');
var router = express.Router();

const {add,details,search} = require('../controllers/productsController');


router.get('/add',add);
router.get('/details/:id',details)
router.get('/search',search)




module.exports = router;