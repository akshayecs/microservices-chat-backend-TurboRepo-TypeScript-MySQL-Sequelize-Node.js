const express = require("express");
const router = express.Router();
const ChatController = require("../controllers/chat.controller");

router.post("/room", ChatController.createRoom);
router.post("/group", ChatController.createGroup);
router.post("/message", ChatController.sendMessage);
router.get("/messages/:roomId", ChatController.getMessages);
module.exports = router;
export { };