const Goal = require('./goalClass')

class Month extends Goal {
	constructor(month) {
		super(month)
		this.parent_goal = month.parent_goal
	}
}

Month.create = (newGoal, result) => Goal.create(newGoal, result, 'month_goals')

Month.findById = (goalId, userid, result) => Goal.findById(goalId, userid, result, 'month_goals')

Month.getAll = (userid, result) => Goal.getAll(userid, result, 'month_goals')

Month.updateById = (goalId, userid, goal, result) => Goal.updateById(goalId, userid, goal, result, 'month_goals')

Month.remove = (id, userid, result) => Goal.remove(id, userid, result, 'month_goals')

Month.removeAll = (userid, result) => Goal.removeAll(userid, result, 'month_goals')

module.exports = Month
