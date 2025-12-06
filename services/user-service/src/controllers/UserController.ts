const UserService = require("../services/UserService");

class UserController {
    async create(req: any, res: any) {
        try {
            const result = await UserService.createUser(req.body);
            return res.json({ success: true, data: result });
        } catch (err) {
            return res.status(500).json({ error: (err as Error).message });
        }
    }

    async list(req: any, res: any) {
        const users = await UserService.getUsers();
        res.json(users);
    }
}

module.exports = new UserController();
export { };