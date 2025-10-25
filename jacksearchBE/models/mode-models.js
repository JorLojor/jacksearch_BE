const mongoose = require('mongoose');

const modeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    descriptions: { type, String, required: true },
    tools: [
        {
            type: String,
            enum: [
                "nmap",
                "whois",
                "subfinder",
                "nikto",
                "dirsearch",
                "metasploit",
            ]
        }
    ]
})
const modeModel = mongoose.model('mode', modeSchema)

module.exports = modeModel
