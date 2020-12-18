const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const productRouter = require('./src/routes/product');
const usersRouter = require('./src/routes/users');

const port = 3000;
require('./src/models/index');

const init = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/product', productRouter);
  app.use('/user', usersRouter);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

init()
