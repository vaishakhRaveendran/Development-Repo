const express=require('express');
const fs =require('fs');
const app=express();
app.use(express.json());

/////////////////////////////////////////////////////////////////////////////////////////////////
//Endpoint Tours
const tours=JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
//tours is a json object
//get tours info
app.get('/api/v1/tours/:id?',(req, res)=>{
   const  id = req.params.id*1;

   if (id > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    const tour=tours.find(el=>el.id===id);
    if (!tour){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    res.status(200).json({
     status: 'success',
     result:tours.length,
      data:{
        tours:tour
       }
    });

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//add new tours
app.post('/api/v1/tours', (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        if (err) {
            res.status(500).json({
                status: 'error',
                message: 'Error writing to file',
            });
        } else {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour,
                },
            });
        }
    });
});
//////////////////////////////////////////////////////////////
//Creating delete end point
app.patch('/api/v1/tours/:id',(req,res)=>{
    const id = req.params.id * 1;
    if (id > tours.length){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    res.status(200).json({
        status:'sucess',
        data:{
                    tour:'<Updated tour here......>',
             }
    });

});
//Created  listner.
const PORT=3000;
app.listen(PORT,()=>{
 console.log(`App listening on port ${PORT}...`);
});
