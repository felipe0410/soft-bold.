const express = require('express');
const router = require('../routes/usersRouter');
const path = require('path');
const fs = require('fs');

const userController ={
   users: function(req, res, next) {
        res.render('./user/Usuario');
      }

}

module.exports = userController;