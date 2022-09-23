var express = require('express');
const { medios_pago } = require('../controllers/indexController');
var router = express.Router();
const indexController = require("../controllers/indexController");
const uploadFile = require("../middlewares/produtImgMulter");
const {body} = require("express-validator");

// validaciones _______________________________
    //validacion_formulario_de_productos
    const validacionProducto = [
        body("nombre").notEmpty().withMessage("Debes escribir un NOMBRE DE USUARIO"),
        body("marca").notEmpty().withMessage("Debes escribir una MARCA "),
        body("precio").notEmpty().withMessage("Debes escribir un PRECIO "),
        body("unidades").notEmpty().withMessage("Debes escribir las UNDIDADES DISPONIBLES"),
        body("descripcion").notEmpty().withMessage("Debes escribir una DESRIPCION"),
        body("componentes").notEmpty().withMessage("Debes escribir los COMPONENTES")
    ]
/* GET home page. */
    router.get('/', indexController.index);

//detalle
    router.get('/detalle/:id', indexController.detalle);

//carrito
    router.get('/car',indexController.car);
    router.get('/car/inf_contacto/medios_pago', medios_pago );
    router.get('/car/inf_contacto',indexController.inf_contacto);
//productos_______________________________________________________________________
    //crear productos_____________________________________________________________
       router.get('/newProduct', indexController.newProduct );
       router.post('/add',uploadFile.single("img"),validacionProducto,indexController.newProductFunction);
//listado de edicion______________________________________________________________
    router.get('/listado', indexController.listado );
//editar producto_________________________________________________________________
    router.get('/edit/:id',indexController.editando);
    router.post('/edit/:id',uploadFile.single("img"),indexController.editado);
//borrar producto__________________________________________________________________
    router.post('/borrar/:id',indexController.borrar);
module.exports = router;
