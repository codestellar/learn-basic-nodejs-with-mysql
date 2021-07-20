const express = require("express");
const router = express.Router();
const conn = require("../lib/db");

// routes
router.post("/", addCustomer);
router.put("/:id", updateCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerByid);
router.delete("/:id", deleteCustomer);

module.exports = router;

function addCustomer(req, res, next) {
  let sql = `Insert into persons(name, phone) values('${req.body.name}', '${req.body.phone}');`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

function updateCustomer(req, res, next) {
  let sql = `Update persons set name = '${req.body.name}', phone= '${req.body.phone}' 
    where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

function getAllCustomers(req, res, next) {
  console.log("Get All customers called");
  let sql = "select * from persons";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

function getCustomerByid(req, res, next) {
  let sql = `Select * from persons where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

function deleteCustomer(req, res, next) {
  let sql = `DELETE from persons where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}
