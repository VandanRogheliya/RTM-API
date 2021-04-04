const Goal = require('./goalClass')

class Task extends Goal {
	constructor(week) {
		super(week)
		this.parent_goal = week.parent_goal
	}
}

Task.create = (newGoal, result) => Goal.create(newGoal, result, 'tasks')

Task.findById = (goalId, userId, result) => Goal.findById(goalId, userId, result, 'tasks')

Task.getAll = (userId, result) => Goal.getAll(userId, result, 'tasks')

Task.updateById = (goalId, userId, goal, result) => Goal.updateById(goalId, userId, goal, result, 'tasks')

Task.remove = (id, userId, result) => Goal.remove(id, userId, result, 'tasks')

Task.removeAll = (userId, result) => Goal.removeAll(userId, result, 'tasks')

module.exports = Task
