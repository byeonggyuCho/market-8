const express = require('express');
const { isAuthenticated } = require('../utils/passport');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/signup', (req, res) => res.render('signup'));
router.get('/confirm', (req, res) => res.render('confirm', { user: req.user }));
router.get('/mypage', isAuthenticated, (req, res) => res.render('mypage', { user: req.user }));
    

router.get('/login', (req, res) => {
    if(req.isAuthenticated())  res.redirect('/mypage');
    else res.render('login', { failureMsg : req.flash().error });
});

module.exports = router;