const express = require('express');

// Controllers
const {
    getAllVehicles,createVehicle
} = require('../controllers/vehicle.controller');

//Middlewares
const {
	createVehicleValidators
} = require('../middlewares/validators.middlewares');

const vehicleRouter = express.Router();
vehicleRouter.post('/',createVehicleValidators, createVehicle);
vehicleRouter.get('/', getAllVehicles);

module.exports = { vehicleRouter };