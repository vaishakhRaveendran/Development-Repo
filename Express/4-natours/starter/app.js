const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

//Built-in Middle-ware.
app.use(morgan('dev'));
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



const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

//CALLBACKS
//RETURN ALL TOURS
const getTour = (req, res) => {
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            timeOfReq  :req.requestTime,
            message: 'Invalid ID',
        });
    }

    const tour = tours.find(el => el.id === id);
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Tour not found',
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: tour,
        },
    });
};

//RETURN PARTICULAR TOUR
const getAllTour = (req, res) => {
    return res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours: tours,
        },
    });
};

//ADD NEW TOUR
const addNewTour = (req, res) => {
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
}

//UPDATE TOUR
const updateTour = (req, res) => {
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here......>',
        },
    });
}

//DELETE TOUR
const deleteTour = (req, res) => {
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
}

//CALLBACKS FOR USERS
const getAllUsers=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This resource is not defined'
    })

}

const updateUser=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This resource is not defined'
    })

}

const deleteUser=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This resource is not defined'
    })

}

const getUser=(req,res)=>{
    return res.status(500).json({
        status:'error',
        message:'This resource is not defined'
    })

}

const addNewUser=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This resource is not defined'
    })

}

//ROUTES TOURS
//tourRouter will be a middleware
const tourRouter=express.Router();

tourRouter  
 .route('/')
 .get(getAllTour)
 .post(addNewTour);

tourRouter
 .route('/:id')
 .get(getTour)
 .patch(updateTour)
 .delete(deleteTour);


//ROUTES USERS
const userRouter=express.Router();
 
userRouter
 .route('/')
 .get(getAllUsers)
 .post(addNewUser);

 userRouter
 .route('/:id')
 .get(getUser)
 .patch(updateUser)
 .delete(deleteUser);

//Router Mounting
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter)
//START SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});
