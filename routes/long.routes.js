module.exports = app => {
	const longTerm = require('../controllers/long.controller.js')

	// Create a new Long Term Goal
	app.post('/long', longTerm.create)

	// Retrieve all Long Term Goals
	app.get('/long', longTerm.findAll)

	// Retrieve a single Long Term Goal with id
	app.get('/long/:id', longTerm.findOne)

	// Update a Long Term Goal with id
	app.put('/long/:id', longTerm.update)

	// Delete a Long Term Goal with id
	app.delete('/long/:id', longTerm.delete)

	// Delete all Long Term Goals
	app.delete('/long', longTerm.deleteAll)
}
