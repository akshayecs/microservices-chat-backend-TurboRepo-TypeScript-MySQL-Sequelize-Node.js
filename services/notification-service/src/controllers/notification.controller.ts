const notificationService = require("../services/NotificationService");

class NotificationController {
    async send(req: any, res: any) {
        try {
            const { user_id, title, message, email } = req.body;

            await notificationService.createNotification({
                user_id,
                title,
                message,
                type: "EMAIL"
            });

            await notificationService.sendEmailNotification(
                email,
                title,
                message
            );

            return res.json({ success: true, message: "Notification sent" });
        } catch (err) {
            return res.status(500).json({ error: (err as Error).message });
        }
    }

    async getAll(req: any, res: any) {
        try {
            const notifications =
                await notificationService.getUserNotifications(
                    req.params.userId
                );

            res.json(notifications);
        } catch (err) {
            res.status(500).json({
                error: (err as Error).message
            });
        }
    }
}

module.exports = new NotificationController();
