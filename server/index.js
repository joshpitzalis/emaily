const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
require('./models/Users')
require('./services/passport')

const app = express()

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.get('/', (req, res) => {
  res.send({ hi: 'hey' })
})
require('./routes/authRoutes')(app)
const PORT = process.env.PORT || 5000
app.listen(PORT)
