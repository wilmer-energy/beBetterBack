const express = require('express');
const cors = require('cors')

// Routers
const { usersRouter } = require('./routes/users.routes');
const { vehicleRouter } = require('./routes/vehicles.routes');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Define endpoints
app.use(cors({origin:'https://clinquant-croissant-9234b2.netlify.app'}))
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/vehicles', vehicleRouter);


// Global error handler
app.use(globalErrorHandler);

// Catch non-existing endpoints
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'error',
		message: `${req.method} ${req.url} does not exists in our server`,
	});
});

module.exports = { app };
