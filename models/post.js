const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  image: { type: "string", required: true },
  description: { type: "string", required: true },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("post", postSchema);
