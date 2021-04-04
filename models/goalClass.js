// Importing sql connection object
const sql = require('./db.js')

class Goal {
	constructor(goal) {
		this.topic = goal.topic
		this.description = goal.description
		this.create_date = goal.create_date
		this.completed = goal.completed
		this.complete_date = goal.complete_date
		this.user_id = goal.user_id
	}
}

Goal.create = (newGoal, result, table) => {
	sql.query(`INSERT INTO ${table} SET ?`, newGoal, (err, res) => {
		if (err) {
			console.log('error: ', err)
			result(err, null)
			return
		}

		console.log(`created ${table}: `, { id: res.insertId, ...newGoal })
		result(null, { id: res.insertId, ...newGoal })
	})
}

Goal.findById = (goalId, userId, result, table) => {
	sql.query(`SELECT * FROM ${table} WHERE id = ${goalId} and user_id = ${userId}`, (err, res) => {
		if (err) {
			console.log('error: ', err)
			result(err, null)
			return
		}

		if (res.length) {
			console.log(`found ${table}: `, res[0])
			result(null, res[0])
			return
		}

		// not found goal with the id
		result({ kind: 'not_found' }, null)
	})
}

Goal.getAll = (userId, result, table) => {
	sql.query(`SELECT * FROM ${table} WHERE user_id = ${userId}`, (err, res) => {
		if (err) {
			console.log('error: ', err)
			result(err, null)
			return
		}

		console.log('goal: ', res)
		result(null, res)
	})
}

Goal.updateById = (id, userId, goal, result, table) => {
	// Changes [topic, description, completed, complete_date] only

	sql.query(
		`UPDATE ${table} SET topic = ?, description = ?, completed = ?, complete_date = ? WHERE id = ? AND user_id = ${userId}`,
		[goal.topic, goal.description, goal.completed, goal.complete_date, id],
		(err, res) => {
			if (err) {
				console.log('error: ', err)
				result(err, null)
				return
			}

			if (res.affectedRows == 0) {
				// not found goal with the id
				result({ kind: 'not_found' }, null)
				return
			}

			console.log('updated goal: ', { id: id, ...goal })
			result(null, { id: id, ...goal })
		}
	)
}

Goal.remove = (id, userId, result, table) => {
	sql.query(`DELETE FROM ${table} WHERE id = ? AND user_id = ${userId}`, id, (err, res) => {
		if (err) {
			console.log('error: ', err)
			result(err, null)
			return
		}

		if (res.affectedRows == 0) {
			// not found goal with the id
			result({ kind: 'not_found' }, null)
			return
		}

		console.log('deleted goal with id: ', id)
		result(null, res)
	})
}

Goal.removeAll = (userId, result, table) => {
	sql.query(`DELETE FROM ${table} WHERE user_id = ${userId}`, (err, res) => {
		if (err) {
			console.log('error: ', err)
			result(err, null)
			return
		}

		console.log(`deleted ${res.affectedRows} goals`)
		result(null, res)
	})
}

module.exports = Goal
