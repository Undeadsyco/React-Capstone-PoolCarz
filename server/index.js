require('dotenv/config')
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const { MONGODB } = require('./config');
const port = 5000

const app = express()

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));

const routes = require('./routes')

app.get('/', (req, res) => {
  res.send(JSON.stringify({ status: 200, message: 'successful' }));
});

app.use('/', routes);

// handling unspecified routes
app.use((req, res) => {
  res.status(404).json({ message: '404 not found', status: 404 });
});

// handle errors
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.send(JSON.stringify({ error: error.message, status: error.status || 500 }));
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  return app.listen({ port: port })
}).then(() => {
  console.log(`connected to mongoDB and listening on port ${port}`)
}).catch((err) => {
  console.log(err.message)
}) 