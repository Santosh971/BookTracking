const mongose = require("mongoose");

const authorSchema = new mongose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

module.exports = mongose.model("Author", authorSchema);

