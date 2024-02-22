require("dotenv").config();
// const cron = require("node-cron");
// const nodemailer = require("nodemailer");

// const dayjs = require("dayjs");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/user.api");
require("./notification");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// const mongoURI = process.env.MONGODB_URI;
// mongoose
//   .connect(mongoURI)
//   .then(() => {
//     console.log("DB connected successfully");
//     // Schedule email tasks
//     mailController.scheduleTasks();
//   })
//   .catch((err) => console.log(err));

module.exports = app;
