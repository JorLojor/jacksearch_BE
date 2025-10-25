const requestModel = require("../models/request-models");
const resultModel = require("../models/result-models")



exports.getResult = async (req, res) => {
    try {
        const { id } = req.params;

        const request = await requestModel.findById(id)
        if (!request) {
            return res.status(400).json({ "message": "request tidak di temukan" })
        }

        const result = await resultModel.findById(request.IdResult)
        if (!result) {
            return res.status(400).json({ "message": "result tidak di temukan" })
        }

        return res.status(200).json({
            "message": "success",
            "data": result
        })
    } catch (error) {
        res.status(500).json(
            {
                "message": "[internal server error]: createResult controller",
                "error": error
            }
        )
    }
}
