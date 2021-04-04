const Goal = require('./goalClass')

class Week extends Goal {
	constructor(week) {
		super(week)
		this.parent_goal = week.parent_goal
	}
}

Week.create = (newGoal, result) => Goal.create(newGoal, result, 'week_goals')

Week.findById = (goalId, userId, result) => Goal.findById(goalId, userId, result, 'week_goals')

Week.getAll = (userId, result) => Goal.getAll(userId, result, 'week_goals')

Week.updateById = (goalId, userId, goal, result) => Goal.updateById(goalId, userId, goal, result, 'week_goals')

Week.remove = (id, userId, result) => Goal.remove(id, userId, result, 'week_goals')

Week.removeAll = (userId, result) => Goal.removeAll(userId, result, 'week_goals')

module.exports = Week
