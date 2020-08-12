const express = require("express");
const router = express.Router();

// Controllers
const authController = require("../controllers/authController");

// Validators
const { isEmail, hasPassword, hasName } = require("../validation/validators");

// Routes
router.post("/login", [isEmail, hasPassword], authController.login);
router.post("/signup", [isEmail, hasPassword, hasName], authController.signup);
router.get("/me", authController.me);

module.exports = router;
