var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require("./database/models/usuario")

var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/usersRouter');
const session = require('express-session');
var app = express();
const cors = require("cors")
app.use(cors())

app.use(session({
  secret: "es secreto",
  resave: false,
  saveUninitialized: false,
}));

app.use(express.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/car', (req,res)=>{
  res.render("/app/views/carrito.ejs");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
