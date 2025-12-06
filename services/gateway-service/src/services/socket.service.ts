// src/services/socket.service.ts
const { pubClient, subClient } = require("../config/redis");
const logger = require("@common/logger");

class SocketService {
    publishMessage(channel: any, payload: any) {
        return pubClient.publish(channel, JSON.stringify(payload));
    }
    subscribe(channel: any, handler: any) {
        subClient.subscribe(channel);
        subClient.on("message", (ch: string, msg: string) => {
            if (ch === channel) handler(JSON.parse(msg));
        });
    }
}

module.exports = new SocketService();
export { };
