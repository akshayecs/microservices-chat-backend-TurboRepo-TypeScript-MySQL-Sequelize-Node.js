const { sendMessage } = require("../../../packages/events/kafka.producer");
const { MESSAGE_CREATED } = require("../../../packages/events/event.types");

async function publishChatMessage(data) {
    await sendMessage(MESSAGE_CREATED, data);
}

module.exports = { publishChatMessage };
