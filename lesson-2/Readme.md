# NodeJS lessons

In this tutorial, we'll connect with mysql database. This has everything done in lesson 1 as well/

* If you have directly jumped into this lesson and are a novice, please checkout lesson 1

* Install MySQL
````
npm i msql2 --save
````

* Checkout the code in server.js
* Create a database in your mysql and ensure the following:
* Import MySQL
````
const mysql = require('mysql2');
````

* Ensure Connection
````
const conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'P@ssword1',
        database: 'sonia',
        port: 3306        
    }
)
````

* Implement your query. Notice the following code in server.js
````
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
````

* if you use the script persons.sql to create your table, you should be seeing the following result in your code:
````
[
  TextRow { id: 3, name: 'Baby', phone: '12345678' },
  TextRow { id: 4, name: 'shilpi', phone: '9569680377' }
]
````