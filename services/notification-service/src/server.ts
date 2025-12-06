require("dotenv").config();

const logger = require("@common/logger");
const NotificationService = require("./services/notification.service");
const { initNotificationKafkaConsumer } = require("./kafka/notification.consumer");

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 7000;

// First connect DB, then start service + server
sequelize
    .sync()
    .then(() => {
        logger.info("Notification DB connected");

        // Start notification worker (email, queue, etc.)
        NotificationService.start();
        logger.info("Notification Service started");

        app.listen(PORT, () => {
            logger.info(`Notification Service running on port ${PORT}`);
        });
        initNotificationKafkaConsumer();
    })
    .catch((err: any) => {
        logger.error("Failed to start Notification Service", err);
    });
