require("dotenv").config();
const http = require("http");
const app = require("./app");
const { setupSocket } = require("./config/socket");
const { initKafkaSocketConsumer, attachIO } = require("./kafka/socket.consumer");

const PORT = process.env.PORT || 3005;

const server = http.createServer(app);

// Initialize WebSocket Gateway
const io = setupSocket(server);   // ⬅ modify this line to RETURN io
attachIO(io);                     // ⬅ attach io to Kafka consumer
initKafkaSocketConsumer();        // ⬅ start Kafka consumer

server.listen(PORT, () => {
    console.log(`Gateway Service running on port ${PORT}`);
});
