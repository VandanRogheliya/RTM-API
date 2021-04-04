const Goal = require('./goalClass')

class Week extends Goal {
	constructor(week) {
		super(week)
		this.parent_goal = week.parent_goal
	}
}

Week.create = (newGoal, result) => Goal.create(newGoal, result, 'week_goals')

Week.findById = (goalId, userid, result) => Goal.findById(goalId, userid, result, 'week_goals')

Week.getAll = (userid, result) => Goal.getAll(userid, result, 'week_goals')

Week.updateById = (goalId, userid, goal, result) => Goal.updateById(goalId, userid, goal, result, 'week_goals')

Week.remove = (id, userid, result) => Goal.remove(id, userid, result, 'week_goals')

Week.removeAll = (userid, result) => Goal.removeAll(userid, result, 'week_goals')

module.exports = Week
