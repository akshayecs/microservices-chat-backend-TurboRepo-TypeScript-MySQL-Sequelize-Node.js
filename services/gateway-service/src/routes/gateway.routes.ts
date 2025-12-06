// src/routes/gateway.routes.ts
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/gateway.controller");

router.get("/health", (req: any, res: any) => ctrl.health(req, res));

module.exports = router;
export { };
