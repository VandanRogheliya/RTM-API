const sql = require('./db.js')

class Goal {
	constructor(goal) {
		this.topic = goal.topic
		this.description = goal.description
		this.create_date = goal.create_date
		this.completed = goal.completed
		this.complete_date = goal.complete_date
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

Goal.findById = (goalId, result, table) => {
	sql.query(`SELECT * FROM ${table} WHERE id = ${goalId}`, (err, res) => {
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

Goal.getAll = (result, table) => {
	sql.query(`SELECT * FROM ${table}`, (err, res) => {
		if (err) {
			console.log('error: ', err)
			result(err, null)
			return
		}

		console.log('goal: ', res)
		result(null, res)
	})
}

Goal.updateById = (id, goal, result, table) => {
	// Changes [topic, description, completed, complete_date] only

	sql.query(
		`UPDATE ${table} SET topic = ?, description = ?, completed = ?, complete_date = ? WHERE id = ?`,
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

Goal.remove = (id, result, table) => {
	sql.query(`DELETE FROM ${table} WHERE id = ?`, id, (err, res) => {
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

Goal.removeAll = (result, table) => {
	sql.query(`DELETE FROM ${table}`, (err, res) => {
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

/*
TESTING

Goal.print = (par) => {
  console.log(par)
}

console.log(Goal);
const g = new Goal({topic: 'asdf'});
console.log(g);

Goal.print("1");

class Goal2 extends Goal {
  constructor(goal2) {
    super(goal2)
    this.d = goal2.d
  }
}

Goal2.print("2")

*/
