const Goal = require('./goalClass')

class Month extends Goal {
	constructor(month) {
		super(month)
		this.parent_goal = month.parent_goal
	}
}

Month.create = (newGoal, result) => Goal.create(newGoal, result, 'month_goals')

Month.findById = (goalId, userId, result) => Goal.findById(goalId, userId, result, 'month_goals')

Month.getAll = (userId, result) => Goal.getAll(userId, result, 'month_goals')

Month.updateById = (goalId, userId, goal, result) => Goal.updateById(goalId, userId, goal, result, 'month_goals')

Month.remove = (id, userId, result) => Goal.remove(id, userId, result, 'month_goals')

Month.removeAll = (userId, result) => Goal.removeAll(userId, result, 'month_goals')

module.exports = Month
