const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/postController");

// Validators
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validation/validators");

//Routes
router.get("/", postController.index);
router.post(
  "/",
  uploadImage("posts").single("image"),
  hasDescription,
  postController.store
);

module.exports = router;
