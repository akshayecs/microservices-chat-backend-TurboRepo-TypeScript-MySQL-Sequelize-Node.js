// src/models/room.model.ts
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Room = sequelize.define(
    "Room",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        created_by: { type: DataTypes.INTEGER, allowNull: false }
    },
    { timestamps: true }
);

module.exports = Room;
export { };
