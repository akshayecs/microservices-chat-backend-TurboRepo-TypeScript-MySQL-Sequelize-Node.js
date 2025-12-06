const ChatService = require("../services/chat.service");
const { publishChatMessage } = require("../kafka/chat.producer");

class ChatController {
    async createRoom(req: any, res: any) {
        const { user1, user2 } = req.body;
        const room = await ChatService.createRoom(user1, user2);
        res.json(room);
    }

    async createGroup(req: any, res: any) {
        const { name, members } = req.body;
        const room = await ChatService.createGroup(name, members);
        res.json(room);
    }

    async sendMessage(req: any, res: any) {
        const { roomId, senderId, content } = req.body;

        // 1. Save message to DB using your service
        const msg = await ChatService.sendMessage(roomId, senderId, content);

        // 2. Publish to Kafka (EVENT STREAM)
        await publishChatMessage({
            roomId,
            senderId,
            content,
            messageId: msg.id,
            timestamp: new Date(),
        });

        res.json(msg);
    }

    async getMessages(req: any, res: any) {
        const { roomId } = req.params;
        const list = await ChatService.fetchMessages(roomId);
        res.json(list);
    }
}

module.exports = new ChatController();
export { };
