const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
        issueDate: { type: Date, default: Date.now },
        returnDate: { type: Date },
        status: { type: String, enum: ["ISSUED", "RETURNED"], default: "ISSUED" }
    }
)

module.exports = mongoose.model("Issue", issueSchema);
