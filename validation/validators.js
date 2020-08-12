const { body, check } = require("express-validator");

exports.hasDescription = body("description")
  .isLength({ min: 6 })
  .withMessage("Description is required. Min Lenght 6 characters.");
