require("dotenv").config();
const sequelize = require("./config/database");
const app = require("./app");

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("User service DB connected.");

        const PORT = process.env.USER_SERVICE_PORT || 3002;
        app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
    } catch (err) {
        console.error("❌ User Service Error:", err);
    }
}

startServer();
