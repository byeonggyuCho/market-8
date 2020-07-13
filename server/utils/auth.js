const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, Users.getById(id)));

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
}, (id, pw, done) => {
    const user = Users.getById(id);
    if(!user) return done(null, false, { message: '아이디가 틀렸습니다.' });
    
    const { name, email, phoneNo } = user;
    return bcrypt.compare(pw, user.pw, (err, res) => {
        if(res) return done(null, { id, name, email, phoneNo });
        return done(null, false, { message: '비밀번호가 틀렸습니다.' });
    });    
}));

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) return next();
    return res.redirect('/login');
}

const authenticate = passport.authenticate('local', { 
        successRedirect: '/mypage',
        failureRedirect: '/login',
        failureFlash: true 
});


    

module.exports = { authenticate, isAuthenticated };
