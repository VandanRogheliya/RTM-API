const Goal = require('./goalClass')

class Month extends Goal {
	constructor(month) {
		super(month)
		this.parent_goal = month.parent_goal
	}
}

Month.create = (newGoal, result) => Goal.create(newGoal, result, 'month_goals')

Month.findById = (goalId, result) => Goal.findById(goalId, result, 'month_goals')

Month.getAll = result => Goal.getAll(result, 'month_goals')

Month.updateById = (goalId, goal, result) => Goal.updateById(goalId, goal, result, 'month_goals')

Month.remove = (id, result) => Goal.remove(id, result, 'month_goals')

Month.removeAll = result => Goal.removeAll(result, 'month_goals')

module.exports = Month
