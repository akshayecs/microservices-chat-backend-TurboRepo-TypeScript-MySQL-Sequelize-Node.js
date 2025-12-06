// src/socket/index.ts
const { createAdapter } = require("@socket.io/redis-adapter");
const { Server } = require("socket.io");
const { pubClient, subClient } = require("../config/redis");
const jwt = require("jsonwebtoken");
const logger = require("@common/logger");

function initSocket(httpServer: any) {
    const io = new Server(httpServer, {
        cors: { origin: "*" }
    });

    io.adapter(createAdapter(pubClient, subClient));

    io.use((socket: any, next: any) => {
        const token = socket.handshake.auth?.token || socket.handshake.query?.token;
        if (!token) return next(new Error("Authentication error: token missing"));
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET || "secret");
            socket.data.user = payload;
            return next();
        } catch (err) {
            logger.error("Socket auth failed", err);
            return next(new Error("Authentication error"));
        }
    });

    io.on("connection", (socket: any) => {
        const user = socket.data.user;
        logger.info(`Socket connected: user=${user?.id} socketId=${socket.id}`);

        socket.join(`user_${user.id}`);

        socket.on("join_room", (roomId: any) => {
            socket.join(`room_${roomId}`);
        });

        socket.on("leave_room", (roomId: any) => {
            socket.leave(`room_${roomId}`);
        });

        socket.on("send_message", (payload: any) => {
            // Payload: { roomId, content, type, metadata }
            // Broadcast to room and publish to Redis channel for persistence
            io.to(`room_${payload.roomId}`).emit("message", { ...payload, sender: user.id, createdAt: Date.now() });

            // publish to channel "chat_messages" for message-service to persist
            pubClient.publish("chat_messages", JSON.stringify({ ...payload, senderId: user.id }));
        });

        socket.on("disconnect", (reason: any) => {
            logger.info(`Socket disconnected ${socket.id} reason=${reason}`);
        });
    });

    return io;
}

module.exports = { initSocket };
export { };
