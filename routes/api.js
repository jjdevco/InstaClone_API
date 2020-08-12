// Routes Handlers
const postsRoutes = require("./posts");
const authRoutes = require("./auth");

module.exports = (app) => {
  app.use("/api/posts", postsRoutes);
  app.use("/api/auth", authRoutes);
};
