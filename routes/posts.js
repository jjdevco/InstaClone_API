const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/postController");

// Validators
const { hasName } = require("../validation/validators");

//Routes
router.get("/", postController.index);
router.post("/", hasName, postController.store);

module.exports = router;
