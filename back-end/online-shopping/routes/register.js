var express = require("express");
var router = express.Router();
var db = require("../database");

router.get("/register", function(req, res, next) {
  let sql = "SELECT * FROM `member` ";
  db.query(sql, (err, results, fields) => {
    console.log(results);
    res.status(200).json(results);
    // req.body.id = id;
    req.body.username = username;
    req.body.password = password;
    req.body.role = role;
  });
});

module.exports = router;
