const passport = require('passport')
const { Strategy } = require('passport-local')
const crypto = require('crypto')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const connection = require('./models/db')

const sha512 = data => {
  return crypto.createHash('sha512').update(data, 'utf-8').digest('hex')
}

// MySQL User Signup via named 'local-signup 'strategy
passport.use(
  'local-signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      password = sha512(password)
      // Find a user whose username is the same as the forms username
      // Check to see if the user trying to login already exists
      connection.query(
        `select * from users where user_email = '${email}'`,
        (err, rows) => {
          if (err) return done(err)
          if (rows.length) {
            return done(null, false, {
              message: 'That username is already taken.',
            })
          } else {
            // Create the user if there is no user with that username
            var newUser = new Object()

            newUser.userEmail = email
            newUser.userPassword = password
            newUser.userName = req.body.name

            var insertQuery = `insert into users ( user_name, user_email, user_password ) values ( '${newUser.userName}' ,'${email}','${password}')`

            connection.query(insertQuery, function (err, rows) {
              if (err) return done(err)
              newUser.id = rows.insertId

              return done(null, newUser)
            })
          }
        }
      )
    }
  )
)

//MySQL User Login via named 'local-login' strategy
passport.use(
  'local-login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      connection.query(
        `select * from users where user_email = '${email}'`,
        function (err, rows) {
          if (err) return done(err)
          if (!rows.length) {
            return done(null, false, {
              message: 'invalid e-mail address or password',
            })
          }
          password = sha512(password)
          if (!(rows[0].user_password == password)) {
            return done(null, false, {
              message: 'invalid e-mail address or password',
            })
          }
          return done(null, rows[0])
        }
      )
    }
  )
)

// Passport session
// Required for persistent login sessions
// Serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user.id)
})

// Deserialize the user
passport.deserializeUser(function (id, done) {
  connection.query(
    `select * from users where id = ${id}`,
    function (err, rows) {
      done(err, rows[0])
    }
  )
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretKey,
}

passport.use(
  new JwtStrategy(jwtOptions, function (jwt_payload, done) {
    console.log(jwt_payload)

    connection.query(
      `select * from users where id = ${jwt_payload._id}`,
      function (err, rows) {
        if (err) return done(err, false)
        if (rows[0]) return done(null, rows[0])
        else return done(null, false)
      }
    )
  })
)

exports.verifyUser = passport.authenticate('jwt', { session: false })

exports.passport = passport
