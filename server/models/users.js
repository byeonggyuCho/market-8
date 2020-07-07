class Users { 
    static users = [];

    static getByIdPw = function ({id, pw}) {
        return this.users.find(user => user.id === id && user.pw === pw);
    }

    static create = function (user) {
        this.users.push(user);
        return user;
    }

    static update = function (user) {
        const id = this.users.findIndex(user.id);
        this.users[id] = user;
    } 

    static delete = function (user) {
        const id = this.users.findIndex(user.id);
        if(id) this.users[id] = null;
    }
}
module.exports = Users;