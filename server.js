const express = require('express')
const cors = require('cors')

require('dotenv').config()

const { passport, verifyUser } = require('./authenticate')

const PORT = 5000

// Creating an ExpressJS app
const app = express()

// Allowing different origins to access the API
app.use(cors())

// parse requests of content-type: application/json
app.use(express.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// TODO: Remove this after testing everything
// app.use(
//   require('express-session')({
//     secret: 'RTM is the best',
//     resave: false,
//     saveUninitialized: false,
//   })
// )

app.use(passport.initialize())
app.use(passport.session())

// Home route
// Development
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RTM API.' })
})

// Verified test route. For development purposes
app.get('/userTest', verifyUser, (req, res) => {
  console.log(req.user)
  res.json({ message: 'Welcome to RTM API.', userId: req.user.id }).statusCode = 200
})

// // Production [RTM ReactJS client build is to be in place]
// const path = require('path')
// app.use(express.static('build'))
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// Routes
require('./routes/long.routes')(app)
require('./routes/month.routes')(app)
require('./routes/week.routes')(app)
require('./routes/task.routes')(app)
require('./routes/user.routes')(app)

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
