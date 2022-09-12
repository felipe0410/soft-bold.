const express = require('express');
const router = require('../routes/indexRouter');
const path = require('path');
const fs = require('fs');

const indexController ={
    index: function(req, res, next) {
        res.render("./product/index");
      },

    car:function(req, res, next) {
        res.render('./product/carrito');
      },
    detalle: function(req, res, next) {
        res.render('./product/detalle');
      },

      newProduct: function(req, res, next) {
        res.render('./product/newProduct');
      },
    
    inf_contacto:function(req, res, next) {
        res.render('./user/inf_contacto');
      },
    detalle:function(req, res, next) {
        res.render('./product/detalle');
      },

      medios_pago: function(req, res, next) {
        res.render('./user/medios_pago');
      }
      

}

module.exports = indexController;