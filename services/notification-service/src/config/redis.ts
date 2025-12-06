const IORedis = require("ioredis");
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const sub = new IORedis(REDIS_URL);
module.exports = { sub };
export { };
