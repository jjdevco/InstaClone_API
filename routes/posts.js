const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/postController");

// Validators
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validation/validators");

//Routes
router.get("/", postController.index);
router.get("/:id", postController.show);
router.post(
  "/",
  uploadImage("posts").single("image"),
  hasDescription,
  postController.store
);
router.patch("/:id", hasDescription, postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
