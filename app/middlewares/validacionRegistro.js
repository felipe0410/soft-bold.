const { body } = require('express-validator');


const validacionRegistro = [
  body('correo').notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Debes escribir un email valido'),
    body('nombre').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    body('apellidos').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña').bail()
    .isLength({ min: 7 ,max: 20 }).withMessage('La contraseña debe tener entre 7 y 20 caracteres').bail()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    .withMessage('La contraseña debe contener una mayuscula y un numero'),

];

module.exports = validacionRegistro;

//validaciones de registro