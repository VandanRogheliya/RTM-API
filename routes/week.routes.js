const { verifyUser } = require('../authenticate')

module.exports = app => {
	const week = require('../controllers/sweek.controller')

	// Create a new Weekly Goal
	app.post('/week', verifyUser, week.create)

	// Retrieve all Weekly Goals
	app.get('/week', verifyUser, week.findAll)

	// Retrieve a single Weekly Goal with id
	app.get('/week/:id', verifyUser, week.findOne)

	// Update a Weekly Goal with id
	app.put('/week/:id', verifyUser, week.update)

	// Delete a Weekly Goal with id
	app.delete('/week/:id', verifyUser, week.delete)

	// Delete all Weekly Goals
	app.delete('/week', verifyUser, week.deleteAll)
}
