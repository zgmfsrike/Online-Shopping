var express = require("express");
var router = express.Router();
var mysql = require("../database");
/* GET users listing. */
// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;

router.get("/users", function(req, res, next) {
  mysql.getConnection((err, mclient) => {
    mclient.query("SELECT * FROM account", function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });
});
