// src/services/auth.service.ts
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

class AuthService {
    async register(name: string, email: string, password: string) {
        const hash = await bcrypt.hash(password, 10);
        return User.create({ name, email, password: hash });
    }

    async login(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) return null;

        const match = await bcrypt.compare(password, user.password);
        return match ? user : null;
    }
}

module.exports = AuthService;
export { };