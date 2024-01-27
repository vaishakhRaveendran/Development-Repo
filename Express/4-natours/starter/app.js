const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));


//CALLBACKS

//RETURN ALL TOURS
const getTour = (req, res) => {
    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
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
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours: tours,
        },
    });
};

//ADD NEW TOUR
function addNewTour(req, res) {
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
function updateTour(req, res) {
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
function deleteTour(req, res) {
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
//ROUTES
app
 .route('/api/v1/tours')
 .get(getAllTour)
 .post(addNewTour);

app
 .route('/api/v1/tours/:id')
 .get(getTour)
 .patch(updateTour)
 .delete(deleteTour);


//PORT LISTENER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});
