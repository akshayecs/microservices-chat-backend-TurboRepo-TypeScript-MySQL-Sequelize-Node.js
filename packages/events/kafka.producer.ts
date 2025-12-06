const kafka = require("./kafka.config");

const producer = kafka.producer();

async function sendMessage(topic, message) {
    await producer.connect();
    await producer.send({
        topic,
        messages: [{ value: JSON.stringify(message) }],
    });

    console.log(`Kafka → Topic: ${topic} | Message Sent`);
}

module.exports = {
    sendMessage,
    producer,
};
