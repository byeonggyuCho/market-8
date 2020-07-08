const fs = require('fs');

class Users { 
    static users = [];

    static init = function() {
        this.#readUsers();
    }

    static #readUsers = function () {
        fs.readFile('myDB.json', 'utf8', (err, data) => {
            if (err){
                console.log(err);
            } else {
                this.users = JSON.parse(data); //now it an object
                console.log(this.users);
            }
        });
    }

    static write = function () {
        const userData = JSON.stringify(this.users);
        fs.writeFile('myDB.json', userData, 'utf8', ()=>console.log('Success!'));
    }

    static getByIdPw = function ({id, pw}) {
        return this.users.find(user => user.id === id && user.pw === pw);   
    }

    static create = function (user) {
        this.users.push(user);
        this.write();
        return user;
    }

    static update = function (user) {
        const id = this.users.findIndex(user.id);
        this.users[id] = user;
        this.write();
    } 

    static delete = function (user) {
        const id = this.users.findIndex(user.id);
        if(id) this.users[id] = null;
        this.write();
    }
}
module.exports = Users;