const express=require('express');
const app=express();


app.get('/',(req, res)=>{
 res.status(200).json({message:'Hello from the server side!',app:'Natours'});

});

app.post('/',(req,res)=>{
 res.status(200).send('We love you');
})


const PORT=3000;
app.listen(PORT,()=>{
 console.log(`App listening on port ${PORT}...`);
})
