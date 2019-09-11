var mysql = require("mysql");
require(`dotenv`).config();
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
var pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT
});
exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if (err) {
      return callback(err);
    }
    callback(err, conn);
  });
};
