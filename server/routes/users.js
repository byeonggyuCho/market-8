const express = require('express');

const router = express.Router();
const userController = require('../controllers/user_controller');
const { passport } = require('../utils/passport');

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/mypage',
    failureRedirect: '/login',
    failureFlash: true,
}));

router.post('/', userController.createUser);
router.get('/id/:id', userController.checkId);

module.exports = router;
