const Users = require('../models/users');

exports.createUser = (req, res) => res.send(Users.create(req.body));
exports.getUserByIdPw = (req, res) => res.send(Users.getUserByIdPw(req.body))
