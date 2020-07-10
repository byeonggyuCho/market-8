const express = require('express');
const { isAuthenticated } = require('../utils/passport');

const router = express.Router();
const apiRouter = require('./api/index');

router.use('/api', apiRouter);

router.get('/', (req, res) => res.render('index'));
router.get('/signup', (req, res) => res.render('signup'));
router.get('/confirm', (req, res) => res.render('confirm', { user: req.query }));
router.get('/mypage', isAuthenticated, (req, res) => res.render('mypage', { user: req.user }));
router.get('/login', (req, res) => req.isAuthenticated() 
    ? res.redirect('/mypage') 
    : res.render('login', { failureMsg : req.flash().error })
);


module.exports = router;