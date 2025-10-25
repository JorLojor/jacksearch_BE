const modeModel = require("../models/mode-models");
const requestModel = require("../models/request-models");
const resultModel = require("../models/result-models");


exports.createRequest = async (req, res) => {
    try {
        const { target, IdMode } = req.body;

        const existingMode = await modeModel.findById(IdMode);
        if (!existingMode) {
            return res.status(400).json({ "message": "mode tidak di temukan" })
        }

        // nge buat result kosong
        const newResult = new resultModel({
            result: []
        })
        await newResult.save();

        // ngebuat data request 
        const newRequest = new requestModel({
            target,
            IdMode: existingMode._id,
            IdResult: newResult._id,
        })
        await newRequest.save()

        // ambil data request
        const newData = await requestModel
            .findById(newRequest._id)
            .populate('IdResult', 'result')

        return res.status(201).json({
            "message": "processing request",
            "data": newData,
        })

    } catch (error) {
        res.status(500).json(
            {
                "message": "[internal server error]: createRequest controller",
                "error": error
            }
        )
    }
}
