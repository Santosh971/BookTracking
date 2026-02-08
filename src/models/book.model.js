const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
        totalCopies: { type: Number },
        availableCopies: { type: Number }
    }
)

module.exports = mongoose.model("Book", bookSchema);