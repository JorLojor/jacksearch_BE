const express = require("express");
const router = express.Router();

const requestController = require("../controllers/request-controllers")

router.post("/", requestController.createRequest)


module.exports = router;
