// src/app.ts
const express = require("express");
const cors = require("cors");
const gatewayRoutes = require("./routes/gateway.routes");
const { setupProxies } = require("./config/proxy");
const app = express();
app.use(cors());
app.use(express.json());

// Setup API Gateway routes
setupProxies(app);
app.use("/gateway", gatewayRoutes);

module.exports = app;
export { };
