const fs = require('fs');
const path = require('path');

class Users { 
    static users = [];
    static fileName = path.join(__dirname, '../myDB.json');

    static init = function () {
        this.#readUsers();
    }

    static #readUsers = function () {
        if(fs.existsSync(this.fileName)){
            const usersData = fs.readFileSync(this.fileName, 'utf8');
            this.users = JSON.parse(usersData);
        }
        
    }

    static write = function () {
        const userData = JSON.stringify(this.users);
        fs.writeFileSync(this.fileName, userData, 'utf8');
    }

    /** @description find user using id & pw
     * @param {string} id
     * @param {string} pw
     * @return {user}
     */
    static getByIdPw = ({id, pw}) => this.users.find(user => user.id === id && user.pw === pw);   



    /** @description find id in db
     * @param {string} id
     * @return {boolean}
     */
    static isIdInDB = function (id) {
        const user = this.users.find(user => user.id === id);
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