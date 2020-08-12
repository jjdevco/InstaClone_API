const express = require("express");
const router = express.Router();

const passportJWT = require("../middlewares/passportJWT")();

// Controllers
const authController = require("../controllers/authController");

// Validators
const { isEmail, hasPassword, hasName } = require("../validation/validators");

// Routes
router.post("/login", [isEmail, hasPassword], authController.login);
router.post("/signup", [isEmail, hasPassword, hasName], authController.signup);
router.get("/me", passportJWT.authenticate(), authController.me);

module.exports = router;
