"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
