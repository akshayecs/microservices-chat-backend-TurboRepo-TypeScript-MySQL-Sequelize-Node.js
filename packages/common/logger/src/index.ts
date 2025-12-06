const pino = require("pino");

const logger = pino({
    transport: {
        target: "pino-pretty"
    },
    level: "info"
});

// Use the CommonJS export syntax instead of 'export const'
module.exports = {
    logger
};