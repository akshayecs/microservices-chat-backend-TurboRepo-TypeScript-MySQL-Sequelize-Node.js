const Room = require("../models/room.model");
const RoomMember = require("../models/message.model");
const Message = require("../models/message.model");
const { Op } = require("sequelize");

class ChatService {
  async createRoom(user1: string, user2: string) {
    const room = await Room.create({ isGroup: false });
    await RoomMember.bulkCreate([
      { roomId: room.id, userId: user1 },
      { roomId: room.id, userId: user2 }
    ]);
    return room;
  }

  async createGroup(name: string, members: string[]) {
    const room = await Room.create({ name, isGroup: true });

    const entries = members.map((m) => ({ roomId: room.id, userId: m }));
    await RoomMember.bulkCreate(entries);

    return room;
  }

  async sendMessage(roomId: string, senderId: string, content: string) {
    return await Message.create({ roomId, senderId, content });
  }

  async fetchMessages(roomId: string) {
    return await Message.findAll({ where: { roomId } });
  }
}
module.exports = ChatService;
export { };