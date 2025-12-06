const kafka = require("./kafka.config");

function startConsumer(topic, callback) {
    const consumer = kafka.consumer({ groupId: `group-${topic}` });

    (async () => {
        await consumer.connect();
        await consumer.subscribe({ topic, fromBeginning: false });

        await consumer.run({
            eachMessage: async ({ message }) => {
                const value = JSON.parse(message.value.toString());
                callback(value);
            },
        });

        console.log(`Kafka Consumer Started → Topic: ${topic}`);
    })();

    return consumer;
}

module.exports = { startConsumer };
