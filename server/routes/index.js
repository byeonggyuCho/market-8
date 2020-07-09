const express = require('express');
const { isAuthenticated } = require('../utils/passport');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/confirm', isAuthenticated, (req, res) => res.render('confirm'));
router.get('/mypage', isAuthenticated, (req, res) => res.render('mypage'));

router.get('/login', (req, res) => {
    if(req.isAuthenticated())  res.redirect('/mypage')
    else res.render('login');
});

module.exports = router;