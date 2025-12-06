const { startConsumer } = require("../../../packages/events/kafka.consumer");
const { MESSAGE_CREATED } = require("../../../packages/events/event.types");

// io will be added via dependency injection
let ioInstance = null;

function attachIO(io) {
    ioInstance = io;
}

function initKafkaSocketConsumer() {
    console.log("🚀 Gateway-Service Kafka Consumer started...");

    startConsumer(MESSAGE_CREATED, (data) => {
        console.log("📡 Message event received from Kafka:", data);

        if (!ioInstance) {
            console.error("❌ IO instance not attached!");
            return;
        }

        // Emit to all users in room
        const room = `room_${data.roomId}`;
        ioInstance.to(room).emit("message", data);

        console.log(`📨 Real-time message emitted to ${room}`);
    });
}

module.exports = { initKafkaSocketConsumer, attachIO };
