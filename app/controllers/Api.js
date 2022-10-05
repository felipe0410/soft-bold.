const express = require('express');
const router = require('../routes/usersRouter');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const usuario = require('../database/models/usuario');
const { validationResult } = require("express-validator");
const session = require('express-session');
const { Association } = require('sequelize');
const { resolveInclude } = require('ejs');
const categoria = require('../database/models/categoria');




const Api = {

  //Api listado de productos 
  Apiproductos: async (req, res) => {
    const productos = await db.producto.findAll()
    let categoria = await db.categoria.findAll()
     
        return res.status(200).json({
          total: productos.length,
          data: productos,
          categorias:categoria,
          status: 200
        });
  },
  

  


  //Detalle del producto___API

  Api_ID: (req, res) => {
    db.producto.findByPk(req.params.id)
      .then(function (producto) {
        return res.status(201).json({
          data: producto,
          status: 201
        });
      })
  },
  //Api de usuario ______API
  ApiUsuarios: (req, res) => {
    db.usuario.findAll()
      .then(function (usuario) {
        for (let i = 0; i < usuario.length; i++) {
          const data = delete usuario.Contraseña;
          console.log(data)
        }

        return res.status(200).json({
          total_Usuarios: usuario.length,
          data: usuario,
          status: 300
        });
      })
  },

}

module.exports = Api;