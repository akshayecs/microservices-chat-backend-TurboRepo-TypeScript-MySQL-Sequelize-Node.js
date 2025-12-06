const { initChatKafkaConsumer } = require("./kafka/chat.consumer");

const express = require("express");
const app = express();

app.use(express.json());
app.use("/chats", require("./routes/chat.routes"));

module.exports = app;
export { };
