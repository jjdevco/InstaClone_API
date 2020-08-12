const { body, check } = require("express-validator");

exports.isEmail = body("email")
  .isEmail()
  .withMessage("Email field must contain a valid email");

exports.hasValidId = check("id")
  .exists()
  .isLength({ min: 10 })
  .withMessage("Id field must contain a valid ID");

exports.hasPassword = body("password")
  .exists()
  .withMessage("Password cannot be empty");

exports.hasName = body("name")
  .isLength({ min: 2 })
  .withMessage("Name is required. Min Lenght 2 characters");

exports.hasDescription = body("description")
  .isLength({ min: 6 })
  .withMessage("Description is required. Min Lenght 6 characters");
