// src/config/database.ts
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || "localhost",
        dialect: "mysql",
        logging: false,
    }
);

module.exports = sequelize;

// REQUIRED for TypeScript to treat this file as a module
export { };
