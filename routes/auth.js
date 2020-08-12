const express = require("express");
const router = express.Router();

// Controllers
const authController = require("../controllers/authController");

// Routes

router.post("login", authController.login);

module.exports = router;
