const express = require('express');

const router = express.Router();
const userController = require('../controllers/user_controller');
const { passport } = require('../utils/passport');
const { wrapAsync } = require('../utils/helper');

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/mypage',
    failureRedirect: '/login',
    failureFlash: true,
}));

router.post('/', wrapAsync(userController.createUser));
router.get('/id/:id', userController.checkId);

module.exports = router;
