const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const register = async ({ name, email, password }) => {

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });

    return user;
}

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User Not Found or Wrong Email")
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        throw new Error("Wrong Password")
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return { token };
}

module.exports = { register, login };

