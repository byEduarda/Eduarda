"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const crypto_1 = require("crypto");
const User_1 = require("../entities/User");
class CreateUser {
    execute(data) {
        return new User_1.User((0, crypto_1.randomUUID)(), data.name, data.login, data.email, data.password);
    }
}
exports.CreateUser = CreateUser;
