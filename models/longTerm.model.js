const Goal = require('./goalClass')

class LongTerm extends Goal {
	constructor(longTerm) {
		super(longTerm)
		this.deadline = longTerm.deadline
	}
}

LongTerm.create = (newGoal, result) => Goal.create(newGoal, result, 'long_goals')

LongTerm.findById = (goalId, userid, result) => Goal.findById(goalId, userid, result, 'long_goals')

LongTerm.getAll = (userid, result) => Goal.getAll(userid, result, 'long_goals')

LongTerm.updateById = (goalId, userid, goal, result) => Goal.updateById(goalId, userid, goal, result, 'long_goals')

LongTerm.remove = (id, userid, result) => Goal.remove(id, userid, result, 'long_goals')

LongTerm.removeAll = (userid, result) => Goal.removeAll(userid, result, 'long_goals')

module.exports = LongTerm
