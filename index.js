"use strict";

const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");

const passportJWT = require("./middlewares/passportJWT")();
const errorHandler = require("./middlewares/errorHandler");
const initConnection = require("./helpers/dbInit");

const apiRoutes = require("./routes/api");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 1000,
  max: 10,
});

// Middlewares Initialization
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({ origin: "*" }));

app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passportJWT.initialize());

// Routes
apiRoutes(app);

// Error Handler Middleware
app.use(errorHandler);

// Listen PORT
const port = process.env.PORT || 5000;

// Database connection and server listen
initConnection(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
