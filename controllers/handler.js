exports.create = (err, data, req, res) => {
	if (err)
		res.status(500).send({
			message: err.message || 'Some error occurred while creating the goals/tasks.',
			code: 500,
		})
	else res.send(data)
}

exports.findAll = (err, data, req, res) => {
	if (err)
		res.status(500).send({
			message: err.message || 'Some error occurred while retrieving goals/tasks.',
			code: 500,
		})
	else res.send(data)
}

exports.findOne = (err, data, req, res) => {
	if (err) {
		if (err.kind === 'not_found') {
			res.status(404).send({
				message: `Not found Goal/Task with id ${req.params.id}.`,
				code: 404,
			})
		} else {
			res.status(500).send({
				message: 'Error retrieving Goal/Task with id ' + req.params.id,
				code: 500,
			})
		}
	} else res.send(data)
}

exports.updateById = (err, data, req, res) => {
	if (err) {
		if (err.kind === 'not_found') {
			res.status(404).send({
				message: `Not found Goal/Task with id ${req.params.id}.`,
				code: 404,
			})
		} else {
			res.status(500).send({
				message: 'Error updating Goal/Task with id ' + req.params.id,
				code: 500,
			})
		}
	} else res.send(data)
}

exports.delete = (err, data, req, res) => {
	if (err) {
		if (err.kind === 'not_found') {
			res.status(404).send({
				message: `Not found Goal/Task with id ${req.params.id}.`,
				code: 404,
			})
		} else {
			res.status(500).send({
				message: 'Could not delete Goal/Task with id ' + req.params.id,
				code: 500,
			})
		}
	} else res.send({ message: `Goal/Task was deleted successfully!`, code: 200 })
}

exports.deleteAll = (err, data, req, res) => {
	if (err)
		res.status(500).send({
			message: err.message || 'Some error occurred while removing all Goals/Tasks.',
			code: 500,
		})
	else res.send({ message: `All Goals/Tasks were deleted successfully!`, code: 200 })
}
