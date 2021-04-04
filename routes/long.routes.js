const { verifyUser } = require('../authenticate.js')

module.exports = app => {
	const longTerm = require('../controllers/long.controller.js')

	// Create a new Long Term Goal
	app.post('/long', verifyUser, longTerm.create)

	// Retrieve all Long Term Goals
	app.get('/long', verifyUser, longTerm.findAll)

	// Retrieve a single Long Term Goal with id
	app.get('/long/:id', verifyUser, longTerm.findOne)

	// Update a Long Term Goal with id
	app.put('/long/:id', verifyUser, longTerm.update)

	// Delete a Long Term Goal with id
	app.delete('/long/:id', verifyUser, longTerm.delete)

	// Delete all Long Term Goals
	app.delete('/long', verifyUser, longTerm.deleteAll)
}
