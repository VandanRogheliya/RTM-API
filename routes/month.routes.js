const { verifyUser } = require('../authenticate')

module.exports = app => {
	const month = require('../controllers/month.controller')

	// Create a new Monthly Goal
	app.post('/month', verifyUser, month.create)

	// Retrieve all Monthly Goals
	app.get('/month', verifyUser, month.findAll)

	// Retrieve a single Monthly Goal with id
	app.get('/month/:id', verifyUser, month.findOne)

	// Update a Monthly Goal with id
	app.put('/month/:id', verifyUser, month.update)

	// Delete a Monthly Goal with id
	app.delete('/month/:id', verifyUser, month.delete)

	// Delete all Monthly Goals
	app.delete('/month', verifyUser, month.deleteAll)
}
