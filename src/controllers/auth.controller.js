const authService = require("../services/auth.service");

exports.register = async (req, res) => {
    const registerRes = await authService.register(req.body);
    console.log("req body : ", req.body)

    return res.status(201).json({ isSuccess: true, data: registerRes, message: "User register Successfull", httpStatus: 201 });
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

