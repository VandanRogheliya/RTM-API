module.exports = app => {
	const week = require('../controllers/week.controller')

	// Create a new Weekly Goal
	app.post('/week', week.create)

	// Retrieve all Weekly Goals
	app.get('/week', week.findAll)

	// Retrieve a single Weekly Goal with id
	app.get('/week/:id', week.findOne)

	// Update a Weekly Goal with id
	app.put('/week/:id', week.update)

	// Delete a Weekly Goal with id
	app.delete('/week/:id', week.delete)

	// Delete all Weekly Goals
	app.delete('/week', week.deleteAll)
}
