const express = require("express");
const path = require("path");
const footballerRoute = require("./routes/footballerRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/", footballerRoute);

app.use(errorHandler);

module.exports = app;
