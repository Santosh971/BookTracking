const authService = require("../services/auth.service");
const userService = require("../services/user.service");
exports.register = async (req, res) => {
    const user = await authService.register(req.body);
    return res.status(user.statusCode).json(user);
}


exports.login = async (req, res) => {
    try {
        const loginRes = await authService.login(req.body);
        return res.status(200).json({ isSuccess: true, data: loginRes, message: "Login Successfull", httpStatus: 200 });
    }
    catch (err) {
        if (err.message == "User Not Found or Wrong Email") {
            return res.status(404).json({ isSuccess: false, data: null, message: "User Not Found or Wrong Email", httpStatus: 404 });
        }

        if (err.message == "Wrong Password") {
            return res.status(400).json({ isSuccess: false, data: null, message: "Wrong Password", httpStatus: 400 });
        }
    }
};

