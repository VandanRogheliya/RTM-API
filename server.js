const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const PORT = 5000

// Creating an ExpressJS app
const app = express()

// Allowing different origins to access the API
app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Home route
// Development
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RTM API.' })
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

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
