var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const Api = require("../controllers/Api");
const {body} = require("express-validator");
// Middleware de session
var session = require("../middlewares/sessionMiddleware") 
// validaciones _______________________________
    //validacion_formulario_de_productos
    var validacionRegistro = require("../middlewares/validacionRegistro")

/* GET users listing. */
router.get('/',session,userController.users );
router.post('/', userController.loggin );

//carrito
router.get('/contacto', userController.contacto);
router.get('/pago', userController.pago);

//registro
router.get('/register', userController.registro);
router.post('/register',validacionRegistro,userController.registrando );
// ingreso
router.get("/ingreso",userController.ingreso)
router.get("/ingreso2",userController.ingreso2)
//APIS
router.get("/api1",Api.Apiproductos)
router.get('/api1/:id', Api.Api_ID);
router.get('/api2', Api.ApiUsuarios);

module.exports = router;
