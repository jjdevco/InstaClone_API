const jwt = require("jwt-simple");
const validationHandler = require("../validation/validationHandler");

const User = require("../models/user");

exports.login = async (req, res, next) => {
  try {
    validationHandler(req);
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const error = new Error("Wrong credentials");
      error.statusCode = 401;
      throw error;
    }

    const validPassword = await user.validatePassword(password, user.password);
    if (!validPassword) {
      const error = new Error("Wrong credentials");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.encode({ id: user.id }, process.env.JWT_SECRET);
    return res.send({
      user,
      token,
    });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    validationHandler(req);
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already used");
      error.statusCode = 403;
      throw error;
    }

    let user = new User();
    user.email = email;
    user.password = await user.encryptPassword(password);
    user.name = name;
    user = await user.save();

    const token = jwt.encode({ id: user.id }, process.env.JWT_SECRET);
    return res.send({ user, token });
  } catch (err) {
    next(err);
  }
};

exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    return res.send(user);
  } catch (err) {
    next(err);
  }
};
