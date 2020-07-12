const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const logger = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');

require('dotenv').config();
require('./models');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/src/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(session({
  resave : false,
  saveUninitialized : false, 
  secret: process.env.SESSION_SECRET,
}));
app.use(flash());
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 

  if(err.message.includes('undefined')) err.status = 400;

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
