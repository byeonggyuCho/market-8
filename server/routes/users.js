const express = require('express');

const router = express.Router();
const userController = require('../controllers/user_controller');
const { passport, isAuthenticated } = require('../utils/passport');

router.post('/login', passport.authenticate('local', { 
    successRedirect: '/mypage',
    failureRedirect: '/login' 
}));

router.post('/', isAuthenticated, userController.createUser);
router.get('/id/:id', isAuthenticated, userController.checkId);

module.exports = router;
