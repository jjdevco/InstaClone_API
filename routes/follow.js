const express = require("express");
const router = express.Router();

// Controllers
const followController = require("../controllers/followController");

//Routes
router.post("/:id", followController.follow);

module.exports = router;
