"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, login, email, password) {
        this.name = name;
        this.login = login;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}
exports.User = User;
