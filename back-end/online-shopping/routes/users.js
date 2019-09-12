var express = require("express");
var router = express.Router();
var db = require("../database");
/* GET users listing. */
// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/users", function(req, res, next) {
  db.query("SELECT * FROM account", function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
