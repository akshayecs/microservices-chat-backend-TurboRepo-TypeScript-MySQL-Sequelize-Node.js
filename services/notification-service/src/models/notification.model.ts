const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Notification = sequelize.define(
    "Notification",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        type: {
            type: DataTypes.ENUM("EMAIL", "PUSH", "SMS"),
            defaultValue: "EMAIL"
        },
        is_read: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    { tableName: "notifications", timestamps: true }
);

module.exports = Notification;
export { };
