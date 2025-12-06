// src/services/message.service.ts

const Message = require("../models/message.model");

class MessageService {
    async createMessage(data: any) {
        return await Message.create(data);
    }

    async getMessagesByRoomId(room_id: any) {
        return await Message.findAll({
            where: { room_id },
            order: [["createdAt", "ASC"]]
        });
    }
}

module.exports = new MessageService();
export { };
