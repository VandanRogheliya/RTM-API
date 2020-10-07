const LongTerm = require('../models/longTerm.model.js')
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
	const longTerm = new LongTerm({
		topic: req.body.topic,
		description: req.body.description,
		create_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
		completed: req.body.completed,
		complete_date: req.body.complete_date,
		deadline: req.body.deadline,
	})

	// Save goal in the database
	LongTerm.create(longTerm, (err, data) => resultHandler.create(err, data, req, res))
}

// Retrieve all goals from the database.
exports.findAll = (req, res) => {
	LongTerm.getAll((err, data) => resultHandler.findAll(err, data, req, res))
}

// Find a single Goal with a 'id'
exports.findOne = (req, res) => {
	LongTerm.findById(req.params.id, (err, data) => resultHandler.findOne(err, data, req, res))
}

// Update a Goal identified by the 'id' in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			message: 'Content can not be empty!',
		})
	}

	LongTerm.updateById(req.params.id, new LongTerm(req.body), (err, data) =>
		resultHandler.updateById(err, data, req, res)
	)
}

// Delete a Goal with the specified 'id' in the request
exports.delete = (req, res) => {
	LongTerm.remove(req.params.id, (err, data) => resultHandler.delete(err, data, req, res))
}

// Delete all Goals from the database.
exports.deleteAll = (req, res) => {
	LongTerm.removeAll((err, data) => resultHandler.deleteAll(err, data, req, res))
}
