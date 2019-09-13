var express = require("express");
var router = express.Router();
var db = require("../database");

router.get('/register', async (req, res, next) => {
  const { username, password } = req.body

})  

module.exports = router;
