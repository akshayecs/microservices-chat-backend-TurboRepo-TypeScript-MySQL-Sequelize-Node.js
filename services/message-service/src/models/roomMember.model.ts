// src/models/roomMember.model.ts
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RoomMember = sequelize.define(
    "RoomMember",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        room_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        role: { type: DataTypes.STRING, defaultValue: "member" }
    },
    { timestamps: true }
);

module.exports = RoomMember;
export { };
