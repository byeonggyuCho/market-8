const Users = require('../models/curation');

exports.createUser = (req, res) => res.send(Users.create(req.body));
exports.getUserByIdPw = (req, res) => res.send(Users.getUserByIdPw(req.body))
