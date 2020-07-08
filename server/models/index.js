const Users = require("./users");

function initDB() {
    Users.init();
};

module.exports = initDB;