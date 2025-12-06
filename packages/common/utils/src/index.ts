// CommonJS Imports (using require)
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Function definitions (no 'export' keyword)
const generateToken = (payload: object) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

const hashPassword = async (password: string) => {
    return bcrypt.hash(password, 10);
};

const comparePassword = async (password: string, hashed: string) => {
    return bcrypt.compare(password, hashed);
};

// CommonJS Export (using module.exports)
module.exports = {
    generateToken,
    hashPassword,
    comparePassword
};