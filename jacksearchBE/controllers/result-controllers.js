const Request = require("../models/request-models");
const Result = require("../models/result-models");

exports.getResult = async (req, res) => {
    try {
        const { id } = req.params;

        const request = await Request.findById(id);
        if (!request) {
            return res.status(404).json({ message: "Request tidak ditemukan" });
        }

        const result = await Result.findById(request.IdResult);
        if (!result) {
            return res.status(404).json({ message: "Result tidak ditemukan" });
        }

        return res.status(200).json({
            message: "Success",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "[internal server error]: getResult controller",
            error: error.message,
        });
    }
};
