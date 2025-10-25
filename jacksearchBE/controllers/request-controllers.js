const Mode = require("../models/mode-models");
const Request = require("../models/request-models");
const Result = require("../models/result-models");

exports.createRequest = async (req, res) => {
    try {
        const { target, IdMode } = req.body;

        // validasi input dasar
        if (!target || !IdMode) {
            return res.status(400).json({ message: "target dan IdMode wajib diisi" });
        }

        const existingMode = await Mode.findById(IdMode);
        if (!existingMode) {
            return res.status(404).json({ message: "Mode tidak ditemukan" });
        }

        // Buat result kosong
        const newResult = await Result.create({ result: [] });

        // Buat request
        const newRequest = await Request.create({
            target,
            IdMode,
            IdResult: newResult._id,
        });

        // Populate buat nampilin data
        const populatedRequest = await Request.findById(newRequest._id).populate("IdResult", "result");

        return res.status(201).json({
            message: "Processing request",
            data: populatedRequest,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "[internal server error]: createRequest controller",
            error: error.message,
        });
    }
};
