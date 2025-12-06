// src/app.ts
const express = require("express");
const messageRoutes = require("./routes/message.routes");

const app = express();
app.use(express.json());

app.use("/messages", messageRoutes);

module.exports = app;
export { };
