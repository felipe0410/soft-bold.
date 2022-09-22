var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.get('/', userController.users );

//carrito
router.get('/contacto', userController.contacto);
router.get('/pago', userController.pago);

//registro
router.get('/register', userController.registro);
router.post('/register',userController.registrando );
router.get("/ingreso",userController.ingreso)


module.exports = router;
