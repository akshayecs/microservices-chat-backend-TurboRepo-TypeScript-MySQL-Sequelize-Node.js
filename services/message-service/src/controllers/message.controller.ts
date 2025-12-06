// src/controllers/message.controller.ts

const messageService = require("../services/message.service");

class MessageController {
    async createMessage(req: any, res: any) {
        try {
            const newMsg = await messageService.createMessage(req.body);
            return res.status(201).json(newMsg);
        } catch (err) {
            return res.status(500).json({ error: (err as Error).message });
        }
    }

    async getRoomMessages(req: any, res: any) {
        try {
            const { room_id } = req.params;
            const msgs = await messageService.getMessagesByRoomId(room_id);

            return res.status(200).json(msgs);
        } catch (err) {
            return res.status(500).json({ error: (err as Error).message });
        }
    }
}

module.exports = new MessageController();
export { };
