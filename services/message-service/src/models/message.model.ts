// src/models/message.model.ts
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Message = sequelize.define(
    "Message",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        room_id: { type: DataTypes.INTEGER, allowNull: false },
        sender_id: { type: DataTypes.INTEGER, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false }
    },
    { timestamps: true }
);

module.exports = Message;
export { };
