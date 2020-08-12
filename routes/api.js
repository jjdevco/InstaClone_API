const passportJWT = require("../middlewares/passportJWT")();

// Routes Handlers
const postsRoutes = require("./posts");
const authRoutes = require("./auth");

module.exports = (app) => {
  app.use("/api/posts", passportJWT.authenticate(), postsRoutes);
  app.use("/api/auth", authRoutes);
};
