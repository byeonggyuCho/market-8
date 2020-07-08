const fs = require('fs');
const path = require('path');

class Users { 
    static users = [];

    static init = function () {
        this.#readUsers();
    }

    static #readUsers = function () {
        const fileName = path.join(__dirname, '../myDB.json');
        if(fs.existsSync(fileName)){
            const usersData = fs.readFileSync(fileName, 'utf8');
            this.users = JSON.parse(usersData);
        }
        
    }

    static write = function () {
        const userData = JSON.stringify(this.users);
        fs.writeFile('myDB.json', userData, 'utf8', ()=>console.log('Success!'));
    }

    /** @description finnd user using id & pw
     * @param {string} id
     * @param {string} pw
     * @return {user}
     */
    static getByIdPw = function ({id, pw}) {
        return this.users.find(user => user.id === id && user.pw === pw);   
    }

    /** @description find id in db
     * @param {string} id
     * @return {boolean}
     */
    static isIdInDB = function (id) {
        const user = this.users.find(user => user?.id === id);
        return user !== undefined;
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