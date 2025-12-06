// src/controllers/gateway.controller.ts
const logger = require("@common/logger");

class GatewayController {
    async health(req: any, res: any) {
        return res.json({ ok: true });
    }
}

module.exports = new GatewayController();
export { };
