const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const flash = require('connect-flash');

require('dotenv').config()
require('./models');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/src/views'));
app.set('view engine', 'pug');


app.use(cookieSession({
  keys: ['배민상회'],
  cookie: {
    maxAge: 1000 * 60 * 60, // 유효기간 1시간
    secure: true,
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

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
