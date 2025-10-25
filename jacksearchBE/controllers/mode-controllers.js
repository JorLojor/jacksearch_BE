const Mode = require("../models/mode-models");

exports.createMode = async (req, res) => {
    try {
        const { name, descriptions, tools } = req.body;

        if (!name || !descriptions) {
            return res.status(400).json({ message: "Field name dan descriptions wajib diisi" });
        }

        const newMode = await Mode.create({ name, descriptions, tools });

        return res.status(201).json({
            message: "Mode berhasil dibuat",
            data: newMode,
        });
    } catch (error) {
        console.error("[ERROR] createMode:", error);
        return res.status(500).json({
            message: "[internal server error]: createMode controller",
            error: error.message,
        });
    }
};

exports.getAllModes = async (req, res) => {
    try {
        const modes = await Mode.find().sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Berhasil mengambil semua mode",
            total: modes.length,
            data: modes,
        });
    } catch (error) {
        console.error("[ERROR] getAllModes:", error);
        return res.status(500).json({
            message: "[internal server error]: getAllModes controller",
            error: error.message,
        });
    }
};

exports.getModeById = async (req, res) => {
    try {
        const { id } = req.params;

        const mode = await Mode.findById(id);
        if (!mode) {
            return res.status(404).json({ message: "Mode tidak ditemukan" });
        }

        return res.status(200).json({
            message: "Berhasil mengambil mode",
            data: mode,
        });
    } catch (error) {
        console.error("[ERROR] getModeById:", error);
        return res.status(500).json({
            message: "[internal server error]: getModeById controller",
            error: error.message,
        });
    }
};

exports.updateMode = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, descriptions, tools } = req.body;

        const mode = await Mode.findById(id);
        if (!mode) {
            return res.status(404).json({ message: "Mode tidak ditemukan" });
        }

        // update data
        if (name) mode.name = name;
        if (descriptions) mode.descriptions = descriptions;
        if (tools) mode.tools = tools;

        await mode.save();

        return res.status(200).json({
            message: "Mode berhasil diperbarui",
            data: mode,
        });
    } catch (error) {
        console.error("[ERROR] updateMode:", error);
        return res.status(500).json({
            message: "[internal server error]: updateMode controller",
            error: error.message,
        });
    }
};

exports.deleteMode = async (req, res) => {
    try {
        const { id } = req.params;

        const mode = await Mode.findByIdAndDelete(id);
        if (!mode) {
            return res.status(404).json({ message: "Mode tidak ditemukan" });
        }

        return res.status(200).json({
            message: "Mode berhasil dihapus",
            data: mode,
        });
    } catch (error) {
        console.error("[ERROR] deleteMode:", error);
        return res.status(500).json({
            message: "[internal server error]: deleteMode controller",
            error: error.message,
        });
    }
};
