const { startConsumer } = require("../../../packages/events/kafka.consumer");
const { MESSAGE_CREATED } = require("../../../packages/events/event.types");

// Example Notification Service Logic
const NotificationService = {
    async sendPush(userId, content) {
        console.log(`📢 Sending notification to User ${userId}: ${content}`);
        // TODO: Integrate Firebase, Email, SMS, or Push Notifications
    }
};

function initNotificationKafkaConsumer() {
    console.log("🚀 Starting Notification-Service Kafka Consumer...");

    startConsumer(MESSAGE_CREATED, async (data) => {
        console.log("🔔 Notification-Service received event:", data);

        await NotificationService.sendPush(data.senderId, data.content);
    });
}

module.exports = { initNotificationKafkaConsumer };
