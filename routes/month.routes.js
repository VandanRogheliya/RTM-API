module.exports = app => {
	const month = require('../controllers/month.controller')

	// Create a new Monthly Goal
	app.post('/month', month.create)

	// Retrieve all Monthly Goals
	app.get('/month', month.findAll)

	// Retrieve a single Monthly Goal with id
	app.get('/month/:id', month.findOne)

	// Update a Monthly Goal with id
	app.put('/month/:id', month.update)

	// Delete a Monthly Goal with id
	app.delete('/month/:id', month.delete)

	// Delete all Monthly Goals
	app.delete('/month', month.deleteAll)
}
