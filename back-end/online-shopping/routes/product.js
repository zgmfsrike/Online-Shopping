var express = require("express");
var router = express.Router();
var mysql = require("../database");
var fs = require("fs");
// var multer = require("multer");
// var upload = multer({ dest: "uploads/" });
const path = require("path");
var productService = require("../services/product_services");
var pathUpload = "/public/uploads/";
var multer = require("multer");

let storage = multer.diskStorage({
  destination: "." + pathUpload,
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage: storage,

  //   limits: { fileSize: 1000000 }
  fileFilter: function(req, file, cb) {
    productService.checkfile(file, cb);
  }
});

const getAny = multer();
// var upload = multer({ dest: "uploads/" });
// var upload = multer({ storage: storage });
// Set The Storage Engine

// router.get("/products", function(req, res, next) {
//   mysql.getConnection((err, sql) => {
//     sql.query("SELECT * FROM account", function(error, results, fields) {
//       if (error) throw error;
//       res.json(results);
//     });
//   });
// });

// Set The Storage Engine

router.post("/products", upload.single("image"), function(req, res, next) {
  let file = req.file;
  productService.validate(req.body);
  let seller = 2;
  let category = req.body.category;
  let name = req.body.name;
  let detail = req.body.detail;
  let price = req.body.price;
  let quantity = req.body.quantity;
  let publish_date = new Date().toISOString().slice(0, 10);
  let imagePath = file.path.replace(/\\/g, "/");
  //   console.log("/");
  //   console.log("\\");
  let query =
    "INSERT INTO product (`seller`,`category`,`name`,`detail`,`price`,`image`,`quantity`,`publish_date`)" +
    `VALUES('${seller}','${category}','${name}','${detail}','${price}','${imagePath}','${quantity}','${publish_date}')`;
  //   console.log(query);
  mysql.getConnection((err, sql) => {
    sql.query(query, function(error, results, fields) {
      if (error) throw error;
      res.status(201).send("Add product success!!");
    });
  });
});

router.get("/products/:product_id", function(req, res, next) {
  let query =
    "SELECT * FROM product where `id` = " + `'${req.params.product_id}'`;
  console.log(query);
  mysql.getConnection((err, sql) => {
    sql.query(query, function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });
});

router.get("/search/category/:category_id", function(req, res, next) {
  let query =
    "SELECT * FROM product where `category` = " + `'${req.params.category_id}'`;
  console.log(query);
  mysql.getConnection((err, sql) => {
    sql.query(query, function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });
});

router.get("/products/", function(req, res, next) {
  let query = "SELECT * FROM product ";
  console.log(query);
  mysql.getConnection((err, sql) => {
    sql.query(query, function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });
});

router.put("/products/:product_id", getAny.any(), function(req, res, next) {
  productService.validate(req.body);
  //   let seller = 2;
  let category = req.body.category;
  let name = req.body.name;
  let detail = req.body.detail;
  let price = req.body.price;
  let quantity = req.body.quantity;
  //   let publish_date = new Date().toISOString().slice(0, 10);
  let active = req.body.active;
  //   if (req.files) {
  //     // console.log(imagePath);
  //   } else {
  //     console.log("NULLLLLLLLLLLLLLLLLLLLLLLLLLLl");
  //     fs.rename(tempPath, targetPath, err => {
  //       if (err) return handleError(err, res);
  //     });
  //   }

  let query =
    "SELECT * FROM product where `id` = " + `'${req.params.product_id}'`;
  console.log(query);
  mysql.getConnection((err, sql) => {
    sql.query(query, function(error, results, fields) {
      if (error) throw error;
      //   let delPath = results[0].image.replace(/\//g, "\\");

      //   fs.unlink(delPath, err => {
      //     if (err) throw err;
      //     console.log("File was deleted");
      //   });

      let queryUpdate =
        "UPDATE product SET `category` =" +
        `'${category}'` +
        ",`name` = " +
        `'${name}'` +
        ", `detail` = " +
        `'${detail}' ` +
        ",`price` =" +
        `'${price}'` +
        ",`quantity` =" +
        `'${quantity}'` +
        ",`active` =" +
        `'${active}'`;

      // ",`image` = " +
      // `'${imagePath}'` +

      queryUpdate += " where `id` = " + `'${req.params.product_id}'`;

      sql.query(queryUpdate, function(error, results, fields) {
        if (error) throw error;
        res.status(200).send("Update product success !!");
      });
    });
  });
});
router.delete("/products/:product_id", function(req, res, next) {
  let query =
    "SELECT * FROM product where `id` = " + `'${req.params.product_id}'`;
  console.log(query);
  mysql.getConnection((err, sql) => {
    sql.query(query, function(error, results, fields) {
      if (error) throw error;
      let queryDel =
        "DELETE FROM product where `id` = " + `'${req.params.product_id}'`;
      if (results[0].image !== null) {
        console.log(results[0].image);

        let delPath = results[0].image.replace(/\//g, "\\");
        fs.unlink(delPath, err => {
          if (err) throw err;
          console.log("File was deleted");
        });
      }
      mysql.getConnection((err, sql) => {
        sql.query(queryDel, function(error, results, fields) {
          if (error) throw error;
          res.status(200).send("Delete product success");
        });
      });
    });
  });
});

module.exports = router;
