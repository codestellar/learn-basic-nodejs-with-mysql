// import express, { json } from "express";
// import { createConnection } from "mysql";

const express = require('express');

const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/errorhandler');
const customersController = require('./controllers/customers.controller');

const app = express();
app.use(express.json());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./controllers/users.controller'));
app.use('/customers', require('./controllers/customers.controller'));

// global error handler
app.use(errorHandler);

app.listen(3100, () => {
  console.log(`connected`);
});
