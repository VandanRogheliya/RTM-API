module.exports = app => {
	const task = require('../controllers/task.controller')

	// Create a new task
	app.post('/task', task.create)

	// Retrieve all tasks
	app.get('/task', task.findAll)

	// Retrieve a single task with id
	app.get('/task/:id', task.findOne)

	// Update a task with id
	app.put('/task/:id', task.update)

	// Delete a task with id
	app.delete('/task/:id', task.delete)

	// Delete all tasks
	app.delete('/task', task.deleteAll)
}
