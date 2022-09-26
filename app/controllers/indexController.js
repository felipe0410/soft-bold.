const express = require('express');
const router = require('../routes/indexRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const categoria = require('../database/models/categoria');
const producto = require('../database/models/producto');
const { validationResult } = require("express-validator");



const indexController = {
  //mostrar productos_________________________________________________
  index: function (req, res, next) {
    db.producto.findAll()
      .then(function (producto) {
        return res.render("./product/index", { producto: producto });
      })
  },
  //carrito____________________________________________________________
  car: function (req, res, next) {
    res.render('./product/carrito');
  },
  //detalle productos __________________________________________________
  detalle: function (req, res, next) {
    db.producto.findByPk(req.params.id).then(function (producto) {
      //return console.log(producto);
      res.render('./product/detalle', { producto });
    })
  },
  //crear producto______________________________________________________
  //Vista por get___________________________________________________
  newProduct: function (req, res, next) {
    db.categoria.findAll()
      .then(function (categoria) {
        return res.render('./product/newProduct', { categoria: categoria });
      })
  },
  //creacion por post________________________________________________
  newProductFunction: function (req, res) {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      let categoria = db.categoria.findAll()
      Promise.all([categoria]).then(function(categoria){
      return res.render('./product/newProduct', {errors:resultValidation.mapped(), oldData:req.body,
        categoria:categoria});
    })
		}
      db.producto.create({
        Nombre_Producto: req.body.nombre,
        Marca: req.body.marca,
        Precio: req.body.precio,
        Unidades: req.body.unidades,
        Descripcion: req.body.descripcion,
        Componentes: req.body.componentes,
        imagen: req.file.filename,

      }).then(function () {
        res.redirect('/')
      })
  },
  //formulario de contacto____________________________________________
  inf_contacto: function (req, res, next) {
    res.render('./user/inf_contacto');
  },

  //medios de pago_____________________________________________________
  medios_pago: function (req, res, next) {
    res.render('./user/medios_pago');
  },

  //listado de edicion____________________________________________________
  listado: function (req, res, next) {
    db.producto.findAll()
      .then(function (producto) {
        return res.render("./product/listadoProductos", { producto: producto });
      })
  },
  //formulario de edicion de productos____________________________________

  editando: function (req, res, next) {
    let producto = db.producto.findByPk(req.params.id)
    let categorias = db.categoria.findAll()

    Promise.all([producto, categorias])
      .then(function ([producto, categoria]) {
        res.render("./product/editarProducto", { producto: producto, categoria: categoria })
      })
  },
  //edicion por post funcion______________________________________________
  editado: function (req, res) {
    db.producto.update({
      Nombre_Producto: req.body.nombre,
      Marca: req.body.marca,
      Precio: req.body.precio,
      Unidades: req.body.unidades,
      Descripcion: req.body.descripcion,
      Componentes: req.body.componentes,
      imagen: req.file.filename,
    }, {
      where: {
        ID_producto: req.params.id
      }
    }).then(function () {
      res.redirect("/detalle/" + req.params.id)
    })
  },
  //borrado de productos_________________________________________________
  borrar: function (req, res) {
    {
      db.producto.destroy({ where: { ID_producto: req.params.id } })
        .then(function () { res.redirect("/listado") })
    }
  }
}

module.exports = indexController;