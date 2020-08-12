const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: { type: "string", required: true },
  description: { type: "string", required: true },
  //user:
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("post", postSchema);
