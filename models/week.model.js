const Goal = require('./goalClass')

class Week extends Goal {
	constructor(week) {
		super(week)
		this.parent_goal = week.parent_goal
	}
}

Week.create = (newGoal, result) => Goal.create(newGoal, result, 'week_goals')

Week.findById = (goalId, result) => Goal.findById(goalId, result, 'week_goals')

Week.getAll = result => Goal.getAll(result, 'week_goals')

Week.updateById = (goalId, goal, result) => Goal.updateById(goalId, goal, result, 'week_goals')

Week.remove = (id, result) => Goal.remove(id, result, 'week_goals')

Week.removeAll = result => Goal.removeAll(result, 'week_goals')

module.exports = Week
