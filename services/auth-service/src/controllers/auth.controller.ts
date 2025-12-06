// src/controllers/auth.controller.ts
const AuthService = require("../services/auth.service");
const authService = new AuthService();

class AuthController {
    async register(req: any, res: any) {
        try {
            const { name, email, password } = req.body;
            const user = await authService.register(name, email, password);
            return res.status(201).json({ user });
        } catch (e) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async login(req: any, res: any) {
        try {
            const { email, password } = req.body;
            const user = await authService.login(email, password);
            if (!user) return res.status(400).json({ error: "Invalid credentials" });
            return res.json({ user });
        } catch (e) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new AuthController();  // <-- MUST EXPORT
export { };