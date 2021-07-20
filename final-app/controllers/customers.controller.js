const express = require("express");
const router = express.Router();
const conn = require("../lib/db");

// routes
router.post("/", addCustomer);
router.put("/:id", updateCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteCustomer);

module.exports = router;

// Add Customer
function addCustomer(req, res, next) {
  let sql = `Insert into persons(name, phone) values('${req.body.name}', '${req.body.phone}');`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

// Update Customer
function updateCustomer(req, res, next) {
  let sql = `Update persons set name = '${req.body.name}', phone= '${req.body.phone}' 
    where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

// Get Customers
function getAllCustomers(req, res, next) {
  console.log("Get All customers called");
  let sql = "select * from persons";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

// Get Customer by Id
function getCustomerById(req, res, next) {
  let sql = `Select * from persons where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

// DELETE Customer
function deleteCustomer(req, res, next) {
  let sql = `DELETE from persons where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}
