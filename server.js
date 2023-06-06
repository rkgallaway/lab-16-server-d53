'use strict';

require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send(`Hello ${req.query.name}`);
});

app.listen(PORT, () => console.log('server running on port: ', PORT));
