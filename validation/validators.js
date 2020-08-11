const { body } = require("express-validator");

exports.hasName = body("name")
  .isLength({ min: 2 })
  .withMessage("Name is required. Min Lenght 5 characters.");
