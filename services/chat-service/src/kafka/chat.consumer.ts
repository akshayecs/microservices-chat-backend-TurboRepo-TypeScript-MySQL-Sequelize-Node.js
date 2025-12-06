const { startConsumer } = require("../../../packages/events/kafka.consumer");
const { MESSAGE_CREATED } = require("../../../packages/events/event.types");

function initChatKafkaConsumer() {
    console.log("🚀 Starting Chat-Service Kafka Consumer...");

    startConsumer(MESSAGE_CREATED, (data) => {
        console.log("📩 New event received in Chat-Service:", data);

        // EXAMPLE:
        // 👉 Emit to socket.io if needed
        // io.to(data.roomId).emit("newMessage", data);

        // 👉 Or update read receipts, logs, search index, etc.
    });
}

module.exports = { initChatKafkaConsumer };
