// src/routes/auth.routes.ts
const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");

router.post("/register", (req: any, res: any) => AuthController.register(req, res));
router.post("/login", (req: any, res: any) => AuthController.login(req, res));

module.exports = router;   // <-- MUST EXPORT
export { };