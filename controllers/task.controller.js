const Task = require('../models/task.model')
const resultHandler = require('./handler')

// Create and Save a new Goal
exports.create = (req, res) => {
	// Validate request
	if (!req.body) {
		res.status(400).send({
			message: 'Content can not be empty!',
		})
	}

	// Create a Goal
	const task = new Task({
		topic: req.body.topic,
		description: req.body.description,
		create_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
		completed: req.body.completed,
		complete_date: req.body.complete_date,
		parent_goal: req.body.parent_goal,
	})

	// Save goal in the database
	Task.create(task, (err, data) => resultHandler.create(err, data, req, res))
}

// Retrieve all goals from the database.
exports.findAll = (req, res) => {
	Task.getAll((err, data) => resultHandler.findAll(err, data, req, res))
}

// Find a single Goal with a 'id'
exports.findOne = (req, res) => {
	Task.findById(req.params.id, (err, data) => resultHandler.findOne(err, data, req, res))
}

// Update a Goal identified by the 'id' in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			message: 'Content can not be empty!',
		})
	}

	Task.updateById(req.params.id, new Task(req.body), (err, data) => resultHandler.updateById(err, data, req, res))
}

// Delete a Goal with the specified 'id' in the request
exports.delete = (req, res) => {
	Task.remove(req.params.id, (err, data) => resultHandler.delete(err, data, req, res))
}

// Delete all Goals from the database.
exports.deleteAll = (req, res) => {
	Task.removeAll((err, data) => resultHandler.deleteAll(err, data, req, res))
}
