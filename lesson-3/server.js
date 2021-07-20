const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'P@ssword1',
        database: 'sonia',
        port: 3306        
    }
)

// Checkout by moving persons after hello world and observe
app.use('/persons', (req, res) => {
    query = conn.promise()
        .query(`SELECT * FROM persons`)
        .then(([result, fields]) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Something bad happened!');
        });
});

// Returns Hello World
app.use('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port = 3000, () => {
    console.log(`Server started at ${port}`);
})