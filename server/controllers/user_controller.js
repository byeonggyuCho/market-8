const Users = require('../models/users');

exports.createUser = async (req, res) => {
    const user = await Users.create(req.body);
    const { id, name, email, phoneNo } = user;
    res.render('confirm', { user : { id, name, email, phoneNo } });
}

exports.checkId = (req, res) => {
    const { id } = req.params;
    if (id === undefined || Users.getById(id)) {
        res.status(404).send('user is already exist')
    } else {
        res.status(200).send('can add!')
    }
}
