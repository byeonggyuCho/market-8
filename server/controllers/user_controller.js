const bcrypt = require('bcrypt');
const url = require('url');
const Users = require('../models/users');

exports.checkId = (req, res) => res.send({ isDup : !!Users.getById(req.params) });
exports.createUser = async (req, res) => {
    const input = req.body;
    input.pw = await bcrypt.hash(input.pw, process.env.SALT);
    if(input.emailFront && input.emailRear) input.email = `${input.emailFront}@${input.emailRear}`;
    const user = Users.create(input);
    const { id, name, email, phoneNo } = user;
    res.redirect(url.format({ 
        pathname: '/confirm', 
        query: { id, name, email, phoneNo },
    }));
}

