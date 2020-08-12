const Post = require("../models/post");
const validationHandler = require("../validation/validationHandler");

exports.index = async (req, res, next) => {
  try {
    const posts = await Post.find({
      userId: { $in: [...req.user.following, req.user._id] },
    })
      .populate("user")
      .sort({ createdAt: -1 });
    res.send(posts);
  } catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    validationHandler(req);
    const post = await Post.findOne({
      _id: req.params.id,
      userId: { $in: [...req.user.following, req.user._id] },
    }).populate("user");
    res.send(post);
  } catch (err) {
    next(err);
  }
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();

    post.description = req.body.description;
    post.image = req.file.filename;
    post.userId = req.user._id;

    post = await post.save();
    res.send(post);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = await Post.findById(req.params.id);

    if (!post || post.userId !== req.user._id) {
      const error = new Error("Wrong request");
      error.statusCode = 400;
      throw error;
    }

    post.description = req.body.description;
    post = await post.save();

    res.send(post);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = await Post.findById(req.params.id);

    if (!post || post.userId !== req.user._id) {
      const error = new Error("Wrong request");
      error.statusCode = 400;
      throw error;
    }

    await post.delete();
    res.send({
      message: "Post deleted",
    });
  } catch (err) {
    next(err);
  }
};
