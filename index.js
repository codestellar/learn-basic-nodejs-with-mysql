import express, { json } from "express";
import { createConnection } from "mysql";

const app = express();
app.use(json());

// MySQL Connection
const conn = createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssword1",
  database: "sonia",
  port: 3306,
});

// Post
app.post("/customer", (req, res) => {
    let sql = `Insert into persons(name, phone) values('${req.body.name}', '${req.body.phone}');`;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send(req.body);
    });
  });

// GET
app.get("/customer", (req, res) => {
  let sql = "select * from persons";
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// GET By ID
app.get("/customer/:id", (req, res) => {
  let sql = `Select * from persons where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Update
app.put("/customer/:id", (req, res) => {
  let sql = `Update persons set name = '${req.body.name}', phone= '${req.body.phone}' 
    where id = '${req.params.id}'`;
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// DELETE 
app.delete("/customer/:id", (req, res) => {
    let sql = `DELETE from persons where id = '${req.params.id}'`;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

app.listen(3100, () => {
  console.log(`connected`);
});
