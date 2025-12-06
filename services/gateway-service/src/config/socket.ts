const { Server } = require("socket.io");
const chatSocketHandler = require("../websockets/chatSocket");

const setupSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    console.log("Socket.io initialized");

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        chatSocketHandler(io, socket);

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });

    return io;   // ⬅ ADD THIS
};

module.exports = { setupSocket };
