module.exports = (io, socket) => {
    // Join Room
    socket.on("join_room", (roomId) => {
        socket.join(roomId);
        console.log(`User joined room: ${roomId}`);
    });

    // Send message
    socket.on("send_message", (data) => {
        io.to(data.room_id).emit("receive_message", data);
    });

    // Typing indicator
    socket.on("typing", (data) => {
        socket.broadcast.to(data.room_id).emit("typing", data);
    });
};
