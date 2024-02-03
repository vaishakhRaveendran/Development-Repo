const dotenv = require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path:'./config.env'});
app = require('./app');
console.log(process.env);
const DB=process.env.DATABASE.replace(
    '<password>',
    process.env.PASSWORD
);
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(conn => {
    console.log(conn.connection);
    console.log('Connection Successful');
});
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`App listening on port ${port}...`);
});
