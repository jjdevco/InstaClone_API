const passportJWT = require("../middlewares/passportJWT")();

// Routes Handlers
const authRoutes = require("./auth");
const postsRoutes = require("./posts");
const followRoutes = require("./follow");

module.exports = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/posts", passportJWT.authenticate(), postsRoutes);
  app.use("/api/follow", passportJWT.authenticate(), followRoutes);
};
