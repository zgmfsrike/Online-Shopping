var mysql = require("mysql");
require(`dotenv`).config();
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
// var pool = mysql.createPool({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASS,
//   database: DB_NAME,
//   port: DB_PORT
// });

var connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT
});
// const conn = callback => {
//   pool.getConnection(function(err, conn) {
//     if (err) {
//       return callback(err);
//     }
//     callback(err, conn);
//   });
// };

connection.connect(function(err) {
  if (err) throw err;
});
// exports.getConnection = function(callback) {
//   pool.getConnection(function(err, conn) {
//     if (err) {
//       return callback(err);
//     }
//     callback(err, conn);
//   });
// };

module.exports = connection;
