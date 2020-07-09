const Model = require('./model');

class User extends Model {
    static init() {
        return super.init({
            id : 'string',
            pw : 'string',
            email : 'string',
            name : 'string',
            phoneNo : 'string',
            address1 : 'string',
            address2 : 'string',
            zipCode : 'string',
            isAdAgreed : 'boolean',
        }, { 
            tableName : 'Users', 
            sync : true 
        });
    } 
}

module.exports = User;