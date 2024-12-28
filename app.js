const express = require("express");
const footballerRoute = require("./routes/footballerRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/", footballerRoute);

app.use(errorHandler);

module.exports = app;
