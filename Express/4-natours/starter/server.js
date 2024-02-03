const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
app = require('./app');
console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});
