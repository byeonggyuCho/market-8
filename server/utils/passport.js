const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new LocalStrategy( {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},(req, id, pw, done) => {
    const user = Users.getByIdPw({ id, pw });
    if(!user) return done(null, false, { message: 'user not found' });
    return done(null, { userId : id });
}));

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) return next();
    return res.redirect('/login');
}

module.exports = { passport, isAuthenticated };
