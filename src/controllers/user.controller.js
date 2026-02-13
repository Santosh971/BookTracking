const mongoose = require("mongoose");
const userService = require("../services/user.service");

exports.getAllUsers = async (req, res) => {
    const user = await userService.getAllUser();
    return res.status(user.statusCode).json(user);
}

exports.getUserById = async (req, res) => {

    const user = await userService.getUserById(req.params.id);
    return res.status(user.statusCode).json(user);
}


exports.deleteUserById = async (req, res) => {
    const user = await userService.deleteUserById(req.params.id);
    return res.status(user.statusCode).json(user);
}

exports.updateUser = async (req, res) => {

    const user = await userService.updateUser(req.body);
    return res.status(user.statusCode).json(user);
}



