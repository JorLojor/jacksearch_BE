const mongoose = require("mongoose");

const modeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        descriptions: { type: String, required: true },
        tools: [
            {
                type: String,
                enum: ["nmap", "whois", "subfinder", "nikto", "dirsearch", "metasploit"],
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Mode", modeSchema);
