const express = require('express');
const router = require('../routes/usersRouter');
const path = require('path');
const fs = require('fs');

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
    }
  }

module.exports = userController;