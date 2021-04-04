const Goal = require('./goalClass')

class LongTerm extends Goal {
	constructor(longTerm) {
		super(longTerm)
		this.deadline = longTerm.deadline
	}
}

LongTerm.create = (newGoal, result) => Goal.create(newGoal, result, 'long_goals')

LongTerm.findById = (goalId, userId, result) => Goal.findById(goalId, userId, result, 'long_goals')

LongTerm.getAll = (userId, result) => Goal.getAll(userId, result, 'long_goals')

LongTerm.updateById = (goalId, userId, goal, result) => Goal.updateById(goalId, userId, goal, result, 'long_goals')

LongTerm.remove = (id, userId, result) => Goal.remove(id, userId, result, 'long_goals')

LongTerm.removeAll = (userId, result) => Goal.removeAll(userid, result, 'long_goals')

module.exports = LongTerm
