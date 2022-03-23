var createError = require('http-errors');
var express = require('express');
// var bodyParser =require('body-parser');
var cors = require('cors');
// var cookieParser = require('cookie-parser');
var bcrypt = require('bcrypt');
var userRouter = require('./routes/userRoutes');
var categoryRouter = require('./routes/categoryRoute');
var productRouter = require('./routes/productRoute');

var app = express();
var dtabase = require('./config/database');



app.use(cors());
app.use(express.json());
// app.use(bodyParser);

app.use('/api/user',userRouter);
app.use('/api/category',categoryRouter);
app.use('/api/product',productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;