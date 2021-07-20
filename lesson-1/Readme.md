# NodeJS lessons

The tutorial talks about creating a super simple REST API showing Hello World.

* Run the following command in a blank repo to create a package.json
````
npm init -y
````
* install express
````
npm i express --save
````
* Create the server.js and add the following code
````
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
````
* Run your app
````
node server.js
````
* Check in browser:
    * http://localhost:3000
    * http://localhost:3000/persons