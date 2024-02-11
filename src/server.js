require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const nunjucks = require("nunjucks");
const dateFilter = require('nunjucks-date-filter');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("./config/session");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use(express.static("public"));

mongoose.connect(process.env.DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(session);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const env = nunjucks.configure(path.resolve(__dirname, "views"), {
  watch: true,
  express: app,
  autoescape: true,
});

env.addFilter('date', dateFilter);

app.set("view engine", "njk");
app.use(require("./routes"));

app.listen(process.env.PORT || 3002);
