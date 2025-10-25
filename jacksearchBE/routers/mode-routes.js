const express = require("express");
const router = express.Router();
const modeController = require("../controllers/mode-controllers");

// CRUD Routes
router.post("/", modeController.createMode);
// http://127.0.0.1:5434/api/mode/
router.get("/", modeController.getAllModes);
// http://127.0.0.1:5434/api/mode/
router.get("/:id", modeController.getModeById);
// http://127.0.0.1:5434/api/mode/{id}
router.put("/:id", modeController.updateMode);
// http://127.0.0.1:5434/api/mode/{id}
router.delete("/:id", modeController.deleteMode);
// http://127.0.0.1:5434/api/mode/{id}

module.exports = router;
