"use strict"

class UserStorage {
    static #users = {
        id : ["kim", "lim", "lee", "park"],
        psword : ["1234","1234","1234","1234"],
        name : ['승민', '도형', '경희', '무혁']
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=> {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {});
        return newUsers;
        return this.#users;
    }
}

module.exports = UserStorage;
