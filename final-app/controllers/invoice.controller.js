const express = require("express");
const router = express.Router();
const conn = require("../lib/db");
const path = require('path');

// routes
router.post("/", getInvoice);

module.exports = router;

function getInvoice(req, res, next){
  
  var filePath = path.join(__dirname, '1.pdf')
  var extract = require('pdf-text-extract')
  var options = {
    cwd: "../"
  }
  extract(filePath, options, function (err, pages) {
    if (err) {
      console.dir(err)
      return
    }
    console.dir('extracted pages', pages)
  })
  res.send(__dirname);
}

