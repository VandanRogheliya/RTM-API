const Goal = require('./goalClass')

class LongTerm extends Goal {
	constructor(longTerm) {
		super(longTerm)
		this.deadline = longTerm.deadline
	}
}

LongTerm.create = (newGoal, result) => Goal.create(newGoal, result, 'long_goals')

LongTerm.findById = (goalId, result) => Goal.findById(goalId, result, 'long_goals')

LongTerm.getAll = result => Goal.getAll(result, 'long_goals')

LongTerm.updateById = (goalId, goal, result) => Goal.updateById(goalId, goal, result, 'long_goals')

LongTerm.remove = (id, result) => Goal.remove(id, result, 'long_goals')

LongTerm.removeAll = result => Goal.removeAll(result, 'long_goals')

module.exports = LongTerm
