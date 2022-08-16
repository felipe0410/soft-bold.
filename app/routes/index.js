var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/car', function(req, res, next) {
  res.render('carrito');
});

router.get('/detalle', function(req, res, next) {
  res.render('detalle');
});

router.get('/car/inf_contacto', function(req, res, next) {
  res.render('inf_contacto');
});

router.get('/detalle', function(req, res, next) {
  res.render('detalle');
});
router.get('/car/inf_contacto/medios_pago', function(req, res, next) {
  res.render('medios_pago');
});


module.exports = router;
