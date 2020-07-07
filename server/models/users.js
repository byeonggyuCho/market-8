class Users { 
    users = [];
    static getUserByIdPw = ({id, pw}) => this.users.find(user => user.id === id && user.pw === pw);
    static create = (user) => this.users.push(user);
    static update =  (user) => this.users[this.users.findIndex(user.id)] = user;
    static delete = (user) => this.users[this.users.findIndex(user.id)] = null;
}
exports = Users;