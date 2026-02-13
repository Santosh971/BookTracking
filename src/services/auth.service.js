const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ApiResponse = require("../util/ApiResponse");

const register = async ({ name, email, password }) => {

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return ApiResponse.badRequest("User already exists with this email");
    }


    const hash = await bcrypt.hash(password, 10);


    const user = await User.create({
        name,
        email,
        password: hash
    });

    const userObj = user.toObject();
    delete userObj.password;

    return ApiResponse.created(userObj, "User created successfully");
};


const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User Not Found or Wrong Email")
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        throw new Error("Wrong Password")
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { token };
}

module.exports = { register, login };

