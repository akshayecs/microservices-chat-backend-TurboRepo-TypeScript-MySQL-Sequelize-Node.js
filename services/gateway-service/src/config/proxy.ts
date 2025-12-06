const { createProxyMiddleware } = require("http-proxy-middleware");

const setupProxies = (app: any) => {
    app.use(
        "/auth",
        createProxyMiddleware({
            target: process.env.AUTH_SERVICE_URL,
            changeOrigin: true
        })
    );

    app.use(
        "/user",
        createProxyMiddleware({
            target: process.env.USER_SERVICE_URL,
            changeOrigin: true
        })
    );

    app.use(
        "/chat",
        createProxyMiddleware({
            target: process.env.CHAT_SERVICE_URL,
            changeOrigin: true
        })
    );

    app.use(
        "/message",
        createProxyMiddleware({
            target: process.env.MESSAGE_SERVICE_URL,
            changeOrigin: true
        })
    );
};

module.exports = { setupProxies };
