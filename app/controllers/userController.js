const express = require('express');
const router = require('../routes/usersRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const usuario = require('../database/models/usuario');
const { validationResult } = require("express-validator");
const session = require('express-session');




const userController = {
  /* formulario de ingreso */
  users: function (req, res, next) {
    res.render('./user/Usuario');
  },
  /* formulario de contacto carrito  GET*/
  contacto: function (req, res, next) {
    res.render("./user/inf_contacto")
  },
  /* formulario de pago carrito GET */
  pago: function (req, res, next) {
    res.render("./user/medios_pago")
  },
  /* formulario de registro GET */
  registro: function (req, res, next) {
    res.render("./user/registro")
  },

  loggin:  async function (req, res, next) {
    try {
    let busqueda = await db.usuario.findOne({raw:true, where:{Email:req.body.Email}});
    
    if(!req.body.Email){ 
      res.render('./user/Usuario', {
      errors: {correo: { msg: "Debes escribir un correo"}}
    })}
      if (busqueda) {
        let comparacion = bcryptjs.compareSync(req.body.Contraseña, busqueda.Contraseña);
            if (comparacion) {
              delete busqueda.Contraseña;
              req.session.userLogged = busqueda;
              console.log(req.session)
             /*  if (req.body.remember) {
                res.cookie('email', req.body.email, { maxAge: (1000*60)*15 })
              } */
              if(busqueda.admin){res.redirect('/users/ingreso'/* ,{usuario: session.userLogged} */)}
              else{res.redirect('/users/ingreso2',/* {usuario: session.userLogged} */)}
            }
            else {
              res.render('./user/Usuario', {
                errors: {correo:{msg:"Las credenciales son invalidas"}}
              })
            }
      }
    } catch (error) {
      console.log(error)
    }
    
    
  },

  ingreso: function (req, res, next) {
    res.render("./user/ingresoUsuario")
  },

  ingreso2: function (req, res, next) {
    res.render("./user/ingresoUsuario2")
  },

  registrando: async function (req, res, next) {
    let Email = await db.usuario.findOne({where:{Email:req.body.correo}});
    const resultValidation = validationResult(req);
    console.log(resultValidation)
    if (Email){
      return res.render('./user/registro', {errors: {correo: {msg: "Este correo ya esta en uso"}},oldData:req.body
      })
    }
    if (resultValidation.errors.length > 0) {
      return res.render('./user/registro', {errors:resultValidation.mapped(), oldData:req.body});
    }
    db.usuario.create({
      Nombres: req.body.nombre,
      Apellidos: req.body.apellidos,
      Email: req.body.correo,
      Contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
    }).then(function () {
      res.redirect('/users')
    })
  }
}

module.exports = userController;