const Sequelize = require('sequelize');

const createDBConnection = () => {
    return new Sequelize(
        process.env.DB_NAME as string,
        process.env.DB_USER as string,
        process.env.DB_PASSWORD as string,
        {
            host: process.env.DB_HOST,
            dialect: "mysql",
            logging: false,
        }
    );
};

// **Change export const to module.exports**
module.exports = {
    createDBConnection
};