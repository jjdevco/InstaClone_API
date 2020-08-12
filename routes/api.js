// Routes Handlers
const postsRoutes = require("./posts");

module.exports = (app) => {
  app.use("/api/posts", postsRoutes);
};
