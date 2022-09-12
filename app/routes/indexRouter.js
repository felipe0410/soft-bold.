var express = require('express');
const { medios_pago } = require('../controllers/indexController');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);
router.get('/car',indexController.car);
router.get('/detalle', indexController.detalle);
router.get('/car/inf_contacto',indexController.inf_contacto);
router.get('/detalle', indexController.detalle);
router.get('/car/inf_contacto/medios_pago', medios_pago );
router.get('/newProduct', indexController.newProduct );


module.exports = router;
