const express = require('express');

const router = express.Router();
const userController = require('../../controllers/user_controller');
const { authenticate } = require('../../utils/auth');
const { wrapAsync } = require('../../utils/helper');

router.get('/id/:id', userController.checkId);
router.post('/login', authenticate);

router.post('/', wrapAsync(userController.createUser));

module.exports = router;
