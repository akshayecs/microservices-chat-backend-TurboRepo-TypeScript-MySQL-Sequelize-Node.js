const { sub } = require("../config/redis");
const logger = require("@common/logger");
const Notification = require("../models/notification.model");
const mailer = require("../utils/mailer");
class NotificationService {
    start() {
        sub.subscribe("chat_messages", (err: any) => {
            if (err) logger.error("subscribe error", err);
            else logger.info("Subscribed to chat_messages");
        });

        sub.on("message", (channel: string, message: any) => {
            try {
                const payload = JSON.parse(message);
                // Example: payload has { roomId, senderId, content }
                logger.info("NotificationService received", payload);
                // Here you would: push to gateway rooms (via pub/sub) or send email/push
                // For demo we just log
            } catch (e) {
                logger.error("Invalid message", e);
            }
        });
    }

    async createNotification(data: any) {
        return await Notification.create(data);
    }

    async sendEmailNotification(to: string, subject: string, text: string) {
        await mailer.sendMail({
            from: process.env.MAIL_USER,
            to,
            subject,
            text
        });
    }

    async getUserNotifications(userId: string) {
        return await Notification.findAll({ where: { user_id: userId } });
    }

}

module.exports = new NotificationService();
export { };
