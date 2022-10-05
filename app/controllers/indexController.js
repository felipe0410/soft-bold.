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
  detalle: async function (req, res, next) {
    let producto= await db.producto.findByPk(req.params.id)
    let productos= await db.producto.findAll()
    Promise.all([producto, productos]).then(function ([producto, productos]) {
      //return console.log(producto);
      res.render('./product/detalle', { producto,productos });
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
  newProductFunction: async function (req, res) {
    console.log(req.body)
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      let categoria = await db.categoria.findAll()
      return res.render('./product/newProduct', {
        errors: resultValidation.mapped(), oldData: req.body,
        categoria: categoria
      });
    }

    let categoria = await db.categoria.findByPk(req.body.categoria)
    let suma = await categoria.total + 1
    const actualizacion ={
      total:suma
    }
    db.categoria.update(actualizacion
      , {
        where: {
          idcategoria: req.body.categoria
        }
      }).then(
        db.producto.create({
          Nombre_Producto: req.body.nombre,
          Marca: req.body.marca,
          Precio: req.body.precio,
          Unidades: req.body.unidades,
          Descripcion: req.body.descripcion,
          Componentes: req.body.componentes,
          imagen: req.file.filename,
          categoria: req.body.categoria,
    
        }).then(function () {
          res.redirect('/')
        })     
      )

      



    
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
  editado: async function (req, res) {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      let producto = db.producto.findByPk(req.params.id)
      let categorias = db.categoria.findAll()
      Promise.all([producto, categorias])
        .then(function ([producto, categoria]) {
          res.render("./product/editarProducto", { producto: producto, categoria: categoria, errors: resultValidation.mapped() })
        })
    } else {
      const productoNuevo = {
        Nombre_Producto: req.body.nombre,
        Marca: req.body.marca,
        Precio: req.body.precio,
        Unidades: req.body.unidades,
        Descripcion: req.body.descripcion,
        Componentes: req.body.componentes,
        Componentes: req.body.categoria
      }
      if (req.file.filename) {
        productoNuevo.imagen = req.file.filename
      }
      db.producto.update(productoNuevo
        , {
          where: {
            ID_producto: req.params.id
          }
        }).then(function () {
          res.redirect("/detalle/" + req.params.id)
        })
    }

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