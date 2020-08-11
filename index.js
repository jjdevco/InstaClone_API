const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middlewares Initialization
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Listen PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
