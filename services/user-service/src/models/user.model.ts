const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
    "User",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: true }
    },
    { tableName: "users", timestamps: true }
);

module.exports = User;
export { };