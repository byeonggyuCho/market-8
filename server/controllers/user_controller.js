const bcrypt = require('bcrypt');
const Users = require('../models/users');

exports.createUser = async (req, res) => {
    const input = req.body;
    input.pw = await bcrypt.hash(input.pw, 10);
    if(input.emailFront && input.emailRear) input.email = `${input.emailFront}@${input.emailRear}`;
    const user = Users.create(input);
    console.log(user);
    const { id, name, email, phoneNo } = user;
    console.log(id, name, email, phoneNo);
    res.render('confirm', { user : { id, name, email, phoneNo } });
}

exports.checkId = (req, res) => {
    const { id } = req.params;
    res.send({ isDup : !!Users.getById(id) });
}
