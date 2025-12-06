require("dotenv").config();
const { initChatKafkaConsumer } = require("./kafka/chat.consumer");

const sequelize = require("./config/database");
const app = require("./app");

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Chat service DB connected.");

        const PORT = process.env.USER_SERVICE_PORT || 3003;
        app.listen(PORT, () => console.log(`Chat service running on ${PORT}`));
        initChatKafkaConsumer();
    } catch (err) {
        console.error("❌ Chat Service Error:", err);
    }
}

startServer();
