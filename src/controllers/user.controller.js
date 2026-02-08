const mongoose = require("mongoose");
const userService = require("../services/user.service");

exports.getAllUsers = async (req, res) => {
    const users = await userService.getAllUser();
    return res.status(200).json({ isSuccess: true, message: "Users List", data: users, httpstatus: 200 });
}

exports.getUserById = async (req, res) => {

    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ isSuccess: false, data: null, message: "Wrong Id Format", httpStatus: 400 });

    }

    const user = await userService.getUserById(id);

    if (!user) {
        return res.status(404).json({ isSuccess: false, data: user, message: "User Not Found", httpStatus: 404 });
    }

    return res.status(200).json({ isSuccess: true, data: user, message: "User Found", httpStatus: 200 });

}


exports.deleteUserById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ isSuccess: false, data: null, message: "Wrong Id Format", httpStatus: 400 });
    }

    const user = await userService.deleteUserById(id);

    if (!user) {
        return res.status(404).json({ isSuccess: false, data: user, message: "User Not Found", httpStatus: 404 });
    }

    return res.status(200).json({ isSuccess: true, data: user, message: "User Delete Successfully", httpStatus: 200 });


}

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.body);
        return res.status(200).json({ isSuccess: true, data: user, message: "User Update Successfully", httpStatus: 200 })
    }
    catch (err) {
        if (err.message == "User not Found") {
            return res.status(404).json({ isSuccess: false, data: null, message: "User Not Found", httpStatus: 404 })

        }
    }


}



