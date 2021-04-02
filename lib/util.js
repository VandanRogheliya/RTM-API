const jwt = require('jsonwebtoken')

// Generates a JWT
exports.getToken = user => {
	return jwt.sign(user, process.env.secretKey, { expiresIn: 86400 })
}