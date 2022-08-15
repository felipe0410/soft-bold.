const express = require('express');
const router = express.Router();
const mainController = require('/app/public/controller/products');

/* GET home page. */

router.get('/', mainController.index);
router.get('/my_purchases', mainController.car);

module.exports = router;
