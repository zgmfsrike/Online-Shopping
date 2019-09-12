var express = require("express");
var router = express.Router();
var db = require("../database");
var fs = require("fs");
// var image = require("../public/uploads/")
// var multer = require("multer");
// var upload = multer({ dest: "uploads/" });
const path = require("path");
var productService = require("../services/product_services");
var pathUpload = "./public/uploads/";
// var multer = require("multer");
const { Validator } = require("node-input-validator");

// let storage = multer.diskStorage({
//   destination: "." + pathUpload,
//   filename: function(req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// const upload = multer({
//   storage: storage,

//   //   limits: { fileSize: 1000000 }
//   fileFilter: function(req, file, cb) {
//     productService.checkfile(file, cb);
//   }
// });

// const getAny = multer();
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

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer.alloc(bitmap).toString("base64");
}
//get base64 string then write the file
function decode_base64(base64) {
  var filepath = pathUpload + Date.now() + ".jpg";
  // console.log(filepath);

  fs.writeFile(filepath, new Buffer.from(base64, "base64"), function(err) {
    filepath = filepath.replace(/\\/g, "/");
    console.log("Create file success");
  });
  return filepath;
}

// router.post("/cv64", upload.any(), function(req, res, next) {
//   //   var b64 = base64_encode(req.file.path);
//   let b64 = req.body.b64;
//   decode_base64(b64);
// });

router.post("/products", function(req, res, next) {
  let publish_date = new Date().toISOString().slice(0, 10);
  let sql = "INSERT INTO product SET ? ";

  req.body.publish_date = publish_date;
  req.body.image = decode_base64(req.body.image);
  console.log(req.body);
  db.query(sql, req.body, function(error, results, fields) {
    if (error) throw error;
    res.status(201).send("Add product success!!");
  });
});

router.get("/products/:product_id", function(req, res, next) {
  let query =
    "SELECT * FROM product where `id` = " + `'${req.params.product_id}'`;
  db.query(query, function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/search/category/:category_id", function(req, res, next) {
  let query =
    "SELECT * FROM product where `category` = " + `'${req.params.category_id}'`;
  db.query(query, function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/products/", function(req, res, next) {
  let query = "SELECT * FROM product ";
  db.query(query, function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.put("/products/:product_id", function(req, res, next) {
  let productId = req.params.product_id;

  let query = "SELECT * FROM product where `id` = " + `'${productId}'`;
  console.log(query);
  db.query(query, function(error, results, fields) {
    if (error) throw error;
    let sqlUpdate = "UPDATE product SET ? WHERE id = " + productId;
    console.log("HERE");
    console.log(req.body);

    if (typeof req.body.image != "undefined") {
      console.log("wut");
      let imagePath = decode_base64(req.body.image);
      req.body.image = imagePath;
    }

    db.query(sqlUpdate, req.body, function(error, results, fields) {
      if (error) throw error;
      res.status(200).send("Update product success !!");
    });
  });
});

router.delete("/products/:product_id", function(req, res, next) {
  let query =
    "SELECT * FROM product where `id` = " + `'${req.params.product_id}'`;
  console.log(query);
  db.query(query, function(error, results, fields) {
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
    db.query(queryDel, function(error, results, fields) {
      if (error) throw error;
      res.status(200).send("Delete product success");
    });
  });
});

module.exports = router;
