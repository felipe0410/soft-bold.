const express = require('express');
const router = require('../routes/indexRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const categoria = require('../database/models/categoria');
const producto = require('../database/models/producto');



const indexController ={

    index: function(req, res, next) {
        db.producto.findAll()
        .then(function(producto){
          return res.render("./product/index", {producto:producto});
        })
      },

    car:function(req, res, next) {
        res.render('./product/carrito');
      },
      
    detalle: function(req, res, next) {
      db.producto.findByPk(req.params.id).then(function(producto){
        //return console.log(producto);
        res.render('./product/detalle', {producto});
    })
      
    },
      newProduct: function(req, res, next) {
        db.categoria.findAll()
        .then(function(categoria){
          return res.render('./product/newProduct',{categoria:categoria});
        })
      },

      newProductFunction: function(req, res){
        /**db.categoria.create({
          nombre: req.body.category,
        }),**/
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
  

      medios_pago: function(req, res, next) {
        res.render('./user/medios_pago');
      },
      listado: function(req, res, next) {
        db.producto.findAll()
        .then(function(producto){
          return res.render("./product/listadoProductos", {producto:producto});
        })
      },

      editando: function(req, res, next) {
        let producto = db.producto.findByPk(req.params.id)
        let categorias = db.categoria.findAll()

        Promise.all([producto, categorias])
        .then(function([producto, categoria]){
          res.render("./product/editarProducto",{producto:producto, categoria:categoria })
        })
      
      },

      editado: function(req, res){
        db.producto.update({
          Nombre_Producto:req.body.nombre,
          Marca: req.body.marca ,
          Precio: req.body.precio ,
          Unidades: req.body.unidades,
          Descripcion: req.body.descripcion,
          Componentes:req.body.componentes,
          imagen: req.file.filename ,
         
        },{
          where: {ID_producto:req.params.id }
        }).then(function(){
            res.redirect('/listado')
        })
    },


      
      

}

module.exports = indexController;

/**
 
},
        
 */