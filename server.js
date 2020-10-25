const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

// Creating an ExpressJS app
const app = express()

// Allowing different origins to access the API
app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Home route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to RTM API.' })
})

// Routes
require('./routes/long.routes')(app)
require('./routes/month.routes')(app)
require('./routes/week.routes')(app)
require('./routes/task.routes')(app)

// set port, listen for requests
app.listen(5000, () => {
	console.log('Server is running on port 5000.')
})
