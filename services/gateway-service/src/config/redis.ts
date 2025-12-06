// src/config/redis.ts
const IORedis = require("ioredis");

const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

const pubClient = new IORedis(REDIS_URL);
const subClient = pubClient.duplicate ? pubClient.duplicate() : new IORedis(REDIS_URL);

module.exports = { pubClient, subClient };
export { };
