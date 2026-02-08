
const User = require("../models/user.model");


const getAllUser = async () => {
    const users = await User.find();
    return users;
}

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
}

const deleteUserById = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
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
        throw new Error("User not Found");
    }
    return user;
}

module.exports = { getAllUser, getUserById, deleteUserById, updateUser };

