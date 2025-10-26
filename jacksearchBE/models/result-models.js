const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        result: {
            type: [mongoose.Schema.Types.Mixed],
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
