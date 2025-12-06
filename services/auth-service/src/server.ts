// src/server.ts
require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected");

        await sequelize.sync();
        console.log("📦 Models synced");

        app.listen(PORT, () => {
            console.log(`🚀 Auth Service running on port ${PORT}`);
        });
    } catch (err) {
        console.error("❌ Server error:", err);
    }
}

startServer();
