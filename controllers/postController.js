const validationHandler = require("../validation/validationHandler");

exports.index = (req, res) => {
  res.send({ message: "Hello" });
};

exports.store = (req, res, next) => {
  try {
    validationHandler(req);
    res.send({ message: `The name is ${req.body.name}` });
  } catch (err) {
    next(err);
  }
};
