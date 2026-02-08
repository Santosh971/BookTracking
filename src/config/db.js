require("dotenv").config();

const mongoose = require("mongoose");
const conectDb = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Db Connected");
}

module.exports = conectDb;

