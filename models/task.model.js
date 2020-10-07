const Goal = require('./goalClass')

class Task extends Goal {
	constructor(week) {
		super(week)
		this.parent_goal = week.parent_goal
	}
}

Task.create = (newGoal, result) => Goal.create(newGoal, result, 'tasks')

Task.findById = (goalId, result) => Goal.findById(goalId, result, 'tasks')

Task.getAll = result => Goal.getAll(result, 'tasks')

Task.updateById = (goalId, goal, result) => Goal.updateById(goalId, goal, result, 'tasks')

Task.remove = (id, result) => Goal.remove(id, result, 'tasks')

Task.removeAll = result => Goal.removeAll(result, 'tasks')

module.exports = Task
