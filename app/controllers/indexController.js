const express = require('express');
const router = require('../routes/indexRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const categoria = require('../database/models/categoria');


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
        db.categoria.findAll()
        .then(function(categoria){
          return res.render('./product/newProduct',{categoria:categoria});
        })
      },

      newProductFunction: function(req, res){
        db.categoria.create({
          nombre: req.body.category,
        }),
        db.producto.create({
          Nombre_Producto: req.body.nombre,
          Marca: req.body.marca ,
          Precio: req.body.precio ,
          Unidades: req.body.unidades,
          Descripcion: req.body.descripcion,
          Componentes:req.body.componentes,
          imagen: req.file.filename ,
         
        }).then(function(){
            res.redirect('/')
        })
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

/**
 
},
        
 */