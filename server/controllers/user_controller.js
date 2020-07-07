const Users = require('../models/users');

exports.createUser = (req, res) => {
    const user = Users.create(req.body);
    res.send(user);
}

exports.getUserByIdPw = (req, res) => {
    const user = Users.getByIdPw(req.body);
    if(user) res.send(user);
    else res.status(404).send('user not found');
}
