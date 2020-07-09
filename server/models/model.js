const fs = require('fs');
const path = require('path');

class Model {
    
    static sync = function() {
        if(fs.existsSync(this.fileName)){
            const data = fs.readFileSync(this.fileName, 'utf8');
            this.items = JSON.parse(data);
        }
    }

    static init = (attributesTypes, { tableName, sync }) => {
        this.tableName = tableName;
        this.dirname = path.join(__dirname, `../database`)
        this.fileName = `${this.dirname}/${tableName}.json`;
        this.attributesTypes = attributesTypes;
        this.items = [];
        if(sync) this.sync();
    }

    static write = function() {
        const data = JSON.stringify(this.items);
        if (!fs.existsSync(this.dirname)) fs.mkdirSync(this.dirname);
        fs.writeFileSync(this.fileName, data, 'utf8');
    }

    static validate = function(item) {
        const data = {};
        console.log(this.attributesTypes);
        for (const [key, value] of Object.entries(item)) {
            console.log(`${key}: ${value}`);
            if(!this.attributesTypes[key] || !value) continue;

            switch(this.attributesTypes[key]){
                case 'date':
                    data[key] = Date(value);
                    break;
                case 'boolean':
                    data[key] = value == 'on' || value == 1;
                    break;
                case typeof(value):
                    data[key] = value;
                    break;
                default:
                    throw new Error('User Input Error'); 
            }
        }
        data.createdAt = Date.now();
        data.updatedAt = Date.now();
        return data;
    }

    static getById = (id) => this.items.find(item => item.id === id);   

    static create = function (item) {
        console.log('items', this.items);
        const validatedItem = this.validate(item);
        this.items.push(validatedItem);
        this.write();
        return validatedItem;
    }

    static update = function (item) {
        const id = this.items.findIndex(item.id);
        item.updatedAt = Date.now();
        this.items[id] = item;
        this.write();
    } 

    static delete = function (item) {
        const id = this.items.findIndex(item.id);
        item.updatedAt = Date.now();
        if(id) this.items[id] = null;
        this.write();
    }
}

module.exports = Model;