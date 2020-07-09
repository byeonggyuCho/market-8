const Users = require('../models/users');

exports.createUser = (req, res) => {
    const user = Users.create(req.body);
    res.send(user);
}

exports.checkId = (req, res) => {
    const {id} = req.params;
    if(id === undefined || Users.isIdInDB(id)) {
        res.status(404).send('user is already exist')
    }else {
        res.status(200).send('can add!')
    }
}
