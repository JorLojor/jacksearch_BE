const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            enum: ["process", "failed", "success"],
            default: "process",
        },
        result: {
            type: [mongoose.Schema.Types.Mixed],
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
