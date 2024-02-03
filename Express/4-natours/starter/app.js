const express = require('express');
const morgan = require('morgan');

//Import routes
const tourRouter=require('./routes/tourRoutes')
const userRouter=require('./routes/userRoutes')
//Import express
const app = express();

//Built-in Middle-ware.
if (process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}
app.use(express.json());

//Custom middle-ware
app.use((req,res,next) => {
    console.log('hello from middleware❤️❤️❤️');
    next();
});
//Add time info
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//Router Mounting
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;
