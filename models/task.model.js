const Goal = require('./goalClass')

class Task extends Goal {
	constructor(week) {
		super(week)
		this.parent_goal = week.parent_goal
	}
}

Task.create = (newGoal, result) => Goal.create(newGoal, result, 'tasks')

Task.findById = (goalId, userid, result) => Goal.findById(goalId, userid, result, 'tasks')

Task.getAll = (userid, result) => Goal.getAll(userid, result, 'tasks')

Task.updateById = (goalId, userid, goal, result) => Goal.updateById(goalId, userid, goal, result, 'tasks')

Task.remove = (id, userid, result) => Goal.remove(id, userid, result, 'tasks')

Task.removeAll = (userid, result) => Goal.removeAll(userid, result, 'tasks')

module.exports = Task
