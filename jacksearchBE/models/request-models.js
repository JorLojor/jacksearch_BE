const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
    {
        target: { type: String, required: true, trim: true },
        status: {
            type: String,
            enum: ["process", "failed", "success"],
            default: "process",
        },
        IdMode: { type: mongoose.Schema.Types.ObjectId, ref: "Mode", default: null },
        IdResult: { type: mongoose.Schema.Types.ObjectId, ref: "Result", default: null },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
