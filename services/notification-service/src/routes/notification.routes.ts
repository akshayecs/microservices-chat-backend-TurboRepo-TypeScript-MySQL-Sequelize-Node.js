const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");

router.post("/send", notificationController.send.bind(notificationController));
router.get("/:userId", notificationController.getAll.bind(notificationController));

module.exports = router;
export { };