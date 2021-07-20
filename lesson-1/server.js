const express = require('express');

const app = express();

// Checkout by moving persons after hello world and observe
app.use('/persons', (req, res) => {
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