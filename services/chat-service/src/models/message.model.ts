const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Message = sequelize.define(
    "Message",
    {
        id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
        roomId: { type: DataTypes.STRING, allowNull: false },
        senderId: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.STRING, allowNull: false }
    },
    { tableName: "messages", timestamps: true }
);

module.exports = Message;
export { };