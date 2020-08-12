const Post = require("../models/post");
const validationHandler = require("../validation/validationHandler");

exports.index = (req, res) => {
  res.send({ message: "Hello" });
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);

    let post = new Post();

    post.description = req.body.description;
    post.image = req.file.filename;

    post = await post.save();

    res.send(post);
  } catch (err) {
    next(err);
  }
};
