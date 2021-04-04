const { verifyUser } = require('../authenticate')

module.exports = app => {
	const task = require('../controllers/task.controller')

	// Create a new task
	app.post('/task', verifyUser, task.create)

	// Retrieve all tasks
	app.get('/task', verifyUser, task.findAll)

	// Retrieve a single task with id
	app.get('/task/:id', verifyUser, task.findOne)

	// Update a task with id
	app.put('/task/:id', verifyUser, task.update)

	// Delete a task with id
	app.delete('/task/:id', verifyUser, task.delete)

	// Delete all tasks
	app.delete('/task', verifyUser, task.deleteAll)
}
