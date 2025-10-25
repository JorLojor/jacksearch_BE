const { json } = require('express');
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    status: { type: String, enum: ["procces", "failed", "success"], default: "procces" },
    result: {
        type: [mongoose.Schema.Types.Mixed],
        default: [],
        required: false
    },
})

const resultModel = mongoose.model('result', resultSchema)

module.exports = resultModel;
