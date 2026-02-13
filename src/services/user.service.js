const mongoose = require("mongoose");
const User = require("../models/user.model");
const ApiResponse = require("../util/ApiResponse");


const getAllUser = async () => {
    const users = await User.find();
    return ApiResponse.ok(users, "User List")
}

const getUserById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return ApiResponse.error("Id Format is Wrong");
    }
    const user = await User.findById(id);
    if (!user) {
        return ApiResponse.notFound("User Not Found");
    }

    return ApiResponse.ok(user, "User Found Successfully");
}

const deleteUserById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return ApiResponse.error("Id Format is Wrong");
    }
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        return ApiResponse.notFound("User Not Found");
    }

    return ApiResponse.ok(user, "User delete Successfully");
}

const updateUser = async (data) => {
    const id = data.id;
    const user = await User.findByIdAndUpdate(
        id,
        {
            $set: data
        },
        {
            new: true
        }
    )

    if (!user) {
        return ApiResponse.badRequest("User Not Update or Bad Request");
    }
    return ApiResponse.ok(user, "User update Successfully");
}

module.exports = { getAllUser, getUserById, deleteUserById, updateUser };

