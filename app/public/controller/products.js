const express = require('express');
const router = require('/app/routes/index');
const path = require('path');
const fs = require('fs');

const mainController = {
    index: function (req, res) {
        res.render('index', {products});
    },

    car: function(req,res){
        res.render('/app/views/carrito.ejs', {buy})
    },

    }

module.exports = mainController;