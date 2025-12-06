// src/routes/message.routes.ts
const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");

router.post("/", messageController.createMessage.bind(messageController));
router.get("/:room_id", messageController.getRoomMessages.bind(messageController));

module.exports = router;
export { };
