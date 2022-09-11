var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.get('/', userController.users );
router.get('/contacto', userController.contacto);
router.get('/pago', userController.pago);
router.get('/register', userController.registro);


module.exports = router;
