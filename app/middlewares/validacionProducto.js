const { body } = require('express-validator');
var path = require('path');
const validacionProducto = [
    body("nombre").notEmpty().withMessage("Debes escribir un NOMBRE DE USUARIO").bail()
    .isLength({ min: 1 ,max: 28 }).withMessage('El nombre del producto no debe ser mayor a 20 caracteres'),
    body("marca").notEmpty().withMessage("Debes escribir una MARCA "),
    body("precio").notEmpty().withMessage("Debes escribir un PRECIO "),
    body("unidades").notEmpty().withMessage("Debes escribir las UNDIDADES DISPONIBLES"),
    body("descripcion").notEmpty().withMessage("Debes escribir una DESRIPCION").bail()
    .isLength({ min: 1 ,max: 340 }).withMessage('La descripcion del producto no debe ser mayor a 340 caracteres'),
    body("componentes").notEmpty().withMessage("Debes escribir los COMPONENTES").bail()
    .isLength({ min: 1 ,max: 340 }).withMessage('La descripcion de componentes del producto no debe ser mayor a 340 caracteres'),
    body('img').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})
]

module.exports = validacionProducto;