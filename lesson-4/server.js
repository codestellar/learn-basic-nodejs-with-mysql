const express = require("express");
var jwt = require("express-jwt");

const mysql = require("mysql2");

//const jwt = require('jsonwebtoken');
const jwtPrivateKey = "YOURPrivateKey";

const users = [
  { id: 1, username: "Gaurav", password: "123456" },
  { id: 2, password: "Shilpi", password: "654321" },
];

const app = express();

app.use(express.json());

//app.use(jwt());

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssword1",
  database: "sonia",
  port: 3306,
});

// app.get("/login",
//   jwt({ secret: jwtPrivateKey }),
//   function (req, res) {
//     if (!req.user.admin) return res.sendStatus(401);
//     res.sendStatus(200);
//   }
// );

// Checkout by moving persons after hello world and observe
app.use("/persons", (req, res) => {
  query = conn
    .promise()
    .query(`SELECT * FROM persons`)
    .then(([result, fields]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Something bad happened!");
    });
});

// app.use("/login", jwt() ,(req, res) => {
//   const userExists = users.find((user) => {
//     return req.body.username == user.username;
//   });

//   if (userExists) {
//     generateToken(userExists.username, userExists.password);
//     //console.log(token);
//     res.send("token generated");
//   } else {
//     res.send("User not found", 400);
//   }
// });

// Returns Hello World
app.use("/", (req, res) => {
  res.send("Hello world");
});

app.listen((port = 3000), () => {
  console.log(`Server started at ${port}`);
});

function jwt() {
    return expressJwt({ secret: jwtPrivateKey, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            {url: '/login', methods: ["POST"]}
        ]
    });
}
