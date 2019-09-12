var express = require("express");
var router = express.Router();
var db = require("../database");

// router.get("/users", function(req, res, next) {
//   db.query("SELECT * FROM account", function(error, results, fields) {
//     if (error) throw error;
//     res.json(results);
//   });
// });

router.put("/orders/:order_id", function(req, res, next) {
  let orderId = req.params.order_id;
  let sql = "UPDATE  `order` SET ? WHERE `id` = " + `'${orderId}'`;
  db.query(sql, req.body, (err, results, fields) => {
    console.log(results);
    res.status(200).send("Status updated!!");
  });
});

router.get("/orders", function(req, res, next) {
  let sql = "SELECT * FROM `order` ";
  db.query(sql, (err, results, fields) => {
    console.log(results);
    res.status(200).json(results);
  });
});
router.get("/detail/orders/:order_id", function(req, res, next) {
  let orderId = req.params.order_id;
  console.log(orderId);
  let sql =
    "SELECT p.id, p.seller,p. category, p.name,p.price,p.image,op.amount FROM `order` as o INNER JOIN `order_product` as op ON o.id = op.order_id " +
    "INNER JOIN `product` as p ON op.product_id = p.id";
  "where o.id = " + `'${orderId}'`;
  console.log(sql);

  db.query(sql, (err, results, fields) => {
    console.log(results);
    res.status(200).json(results);
  });
});

router.get("/history/orders/:member_id", function(req, res, next) {
  let memberId = req.params.member_id;
  let sql =
    "SELECT * FROM `order` as o  " + "where o.member = " + `'${memberId}'`;

  db.query(sql, (err, results, fields) => {
    console.log(results);
    res.status(200).json(results);
  });
});

router.post("/orders", function(req, res, next) {
  //   res.json(req.body);
  let member = req.body.member;
  let seller = req.body.seller;
  let totalPrice = req.body.total_price;
  let status = 1;
  let delivery = 1;
  let datetime = new Date();
  db.query(
    "SELECT * FROM member WHERE id =" + member,
    (error, results, fields) => {
      if (error) throw error;
      let wallet = results[0].wallet;
      if (wallet - totalPrice > 0) {
        // console.log("Enough money");
        let currentWallet = wallet - totalPrice;
        let sqlUpdate = "UPDATE member SET `wallet`= ? WHERE id = ?";
        db.query(
          sqlUpdate,
          [currentWallet, member],
          (error, results, fields) => {
            // console.log(results);
            console.log("Update wallet");
            let sql =
              "INSERT INTO  `order` (`member`,`seller`,`status`,`delivery`,`order_date`) VALUES ? ";
            let values = [[member, seller, status, delivery, datetime]];
            // console.log(values);

            db.query(sql, [values], (err, results, fields) => {
              if (err) throw err;
              console.log("Add order success");
              let orderId = results.insertId;
              let cart = req.body.cart;
              let orderProduct = [];

              cart.forEach(item => {
                orderProduct.push([orderId, item.product_id, item.amount]);
              });
              console.log(orderProduct);

              let sqlProduct =
                "INSERT INTO `order_product` (order_id,product_id,amount) VALUES ?";
              db.query(sqlProduct, [orderProduct], (err, results, fields) => {
                // console.log(results);
                console.log("Add order product success!!");
                res.status(201).send("Order created!!");
              });
            });
          }
        );
      } else {
        console.log("Not enough money");
      }
    }
  );

  //   db.query("SELECT * FROM account", function(error, results, fields) {
  //     if (error) throw error;
  //     res.json(results);
  //   });
});
module.exports = router;
