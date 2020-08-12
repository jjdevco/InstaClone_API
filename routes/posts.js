const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/postController");

// Validators
const uploadImage = require("../middlewares/multer");
const { hasValidId, hasDescription } = require("../validation/validators");

//Routes
router.get("/", postController.index);
router.get("/:id", hasValidId, postController.show);
router.post(
  "/",
  [uploadImage("posts").single("image"), hasValidId, hasDescription],
  postController.store
);
router.patch("/:id", [hasValidId, hasDescription], postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
