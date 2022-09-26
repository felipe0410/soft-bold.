const express = require('express');
const router = require('../routes/usersRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const usuario = require('../database/models/usuario');



const userController = {
  users: function (req, res, next) {
    res.render('./user/Usuario');
  },
  contacto: function (req, res, next) {
    res.render("./user/inf_contacto")
  },
  pago: function (req, res, next) {
    res.render("./user/medios_pago")
  },
  registro: function (req, res, next) {
    res.render("./user/registro")
  },

  loggin:  async function (req, res, next) {
    let busqueda = await db.usuario.findOne({where:{Email:req.body.Email}});
     //return console.log(busqueda.Contraseña)
      if (busqueda) {
        let comparacion = bcryptjs.compareSync(req.body.Contraseña, busqueda.Contraseña);
        console.log(comparacion)
            if (comparacion) {
             /*  delete busqueda.Contraseña;
              req.session.userLogged = comparacion;
              if (req.body.remember) {
                res.cookie('email', req.body.email, { maxAge: (1000*60)*15 })
              } */
              res.redirect('/users/ingreso')
            }
            else {
              res.render('./user/Usuario', {
                errors: {
                  email: {
                    msg: "Las credenciales son invalidas"
                  }
                }
              })
            }

        
      }
    
  },

  ingreso: function (req, res, next) {
    res.render("./user/ingresoUsuario")
  },


  registrando: function (req, res, next) {
    /* if (db.usuario.findByPk(req.body.correo)) {
      res.send("ya existe el correo en la base de datos")
      res.redirect("/users")
    } */
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