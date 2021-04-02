const { passport } = require('../authenticate')

module.exports = app => {
	const user = require('../controllers/user.controller')

	app.post('/user/login', passport.authenticate('local-login'), user.handleLoginSignup)

	app.post('/user/signup', passport.authenticate('local-signup'), user.handleLoginSignup)
}
