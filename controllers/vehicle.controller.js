
const dotenv = require('dotenv');

// Models
const { Vehicle } = require('../models/vehicle.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

dotenv.config({ path: './config.env' });

const getAllVehicles = catchAsync(async (req, res, next) => {
	const vehicle = await Vehicle.findAll();
	res.status(200).json({
		status: 'success',
		data: { vehicle },
	});
});

const createVehicle = catchAsync(async (req, res, next) => {
	const { userId,type,year,brand} = req.body;

	const newVehicle = await Vehicle.create({
		userId,
		type,
		year,
        brand,
	});

	// Remove password from response
	//newUser.password = undefined;

	// 201 -> Success and a resource has been created
	res.status(201).json({
		status: 'success',
		data: { newVehicle },
	});
});

module.exports = {
	getAllVehicles,
    createVehicle
};