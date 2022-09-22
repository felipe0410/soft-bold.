const express = require('express');
const router = require('../routes/usersRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");



const userController ={
   users: function(req, res, next) {
        res.render('./user/Usuario');
      },
    contacto : function(req,res,next) {
      res.render("./user/inf_contacto")
    },
    pago: function(req,res,next) {
      res.render("./user/medios_pago")
    },
    registro: function(req,res,next){
      res.render("./user/registro")
    },
    ingreso: function(req,res,next){
      res.render("./user/ingresoUsuario")
    },
    registrando: function(req,res,next){
        db.usuario.create({
        Nombres: req.body.nombre,
        Apellidos: req.body.apellidos ,
        Email: req.body.correo ,
        Contraseña: req.body.contraseña,
       
      }).then(function(){
          res.redirect('/users')
      })
    }
  }

module.exports = userController;