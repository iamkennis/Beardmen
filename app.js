const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalError = require('./controller/errorController')
const prouductRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute')

const app = express();

app.use((req, res, next) => {  
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
 });

app.use(express.json());
app.use(express.static((__dirname, '../client/build', 'index.html')));

app.use(bodyParser.json());
app.use(cookieParser()) 

// ROUTE
app.use('/api/products', prouductRouter);
app.use('/api/users', userRouter);
app.use('/api/carts', cartRouter)


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404))
})

app.use(globalError);

module.exports = app;