var express = require('express');
const { medios_pago } = require('../controllers/indexController');
var router = express.Router();
const indexController = require("../controllers/indexController")
const uploadFile = require("../middlewares/produtImgMulter")

/* GET home page. */
router.get('/', indexController.index);

//detalle
router.get('/detalle', indexController.detalle);
router.get('/detalle', indexController.detalle);

//carrito
router.get('/car',indexController.car);
router.get('/car/inf_contacto/medios_pago', medios_pago );
router.get('/car/inf_contacto',indexController.inf_contacto);


//productos
router.get('/newProduct', indexController.newProduct );
router.post('/add', uploadFile.single("img"),indexController.newProductFunction );

module.exports = router;
