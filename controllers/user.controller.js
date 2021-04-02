const { getToken } = require('../lib/util')

exports.handleLoginSignup = (req, res) => {
  if (req.user) {
    const token = getToken({ _id: req.user.id })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({ success: true, token, userId: req.user.id })
  } else {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.json({ success: false })
  }
}
