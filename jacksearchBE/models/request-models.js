const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    target: { type: String, required: true },
    IdMode: { type: mongoose.Schema.Types.ObjectId, ref: 'mode', required: false, default: null },
    IdResult: { type: mongoose.Schema.Types.ObjectId, ref: 'result', required: false, default: null }
})

const requestModel = mongoose.model('request', requestSchema)

module.exports = requestModel
