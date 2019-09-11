var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var mysql = require("mysql");
// require(`dotenv`).config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/product");
var mysql = require("./database");
var multer = require("multer");
var bodyParser = require("body-parser");
var app = express();
var apiVersion = "/api/v1";

// const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
// var connection = mysql.createConnection({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME,
//   port: DB_PORT
// });
mysql.getConnection((err, mclient) => {
  mclient.query("SELECT * FROM account", function(error, results, fields) {
    if (error) throw error;
    console.log("DB CONNECT !!");
  });
});

// app.use(multer());

// connection.query("SELECT * FROM account", function(error, results, fields) {
//   if (error) throw error;
//   console.log("DB CONNECT!!");
// });

// if (connection.state === "disconnected") {
//   console.log(null, { status: "fail", message: "server down" });
// } else {
//   console.log("DB CONNECTs");
// }
// connection.end();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use(apiVersion, productRouter);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3000, "127.0.0.1");
module.exports = app;
