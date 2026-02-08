require("dotenv").config;
const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
    const token = req.headers.authorization.split("")[1];
    if (token == null) {
        return res.status(401).json({ mesaage: "No Token" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch {
        res.status(401).json({ message: "Invalid token" });
    }


}