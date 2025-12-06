const User = require("../models/user.model");

class UserService {
    async createUser(data) {
        return User.create(data);
    }

    async getUsers() {
        return User.findAll();
    }
}

module.exports = new UserService();
