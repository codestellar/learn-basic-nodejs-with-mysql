const express = require('express');
const mysql = require('mysql2');

const app = express();

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
        .then(([res, fields]) => {
            console.log(res);
            //console.log(fields);
        })
        .catch((err) => {
            console.log('Something bad happened!');
            console.log(err);
        });

    res.send([
        {id: 1, name: 'Gaurav'},
        {id: 1, name: 'Shilpi'},
    ]);
});

// Returns Hello World
app.use('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port = 3000, () => {
    console.log(`Server started at ${port}`);
})