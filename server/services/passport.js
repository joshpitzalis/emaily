const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.serializeUser((_user, _done) => {
  _done(null, _user.id)
})

passport.deserializeUser((_id, _done) => {
  User.findById(_id).then(_user =>
    _done(null, _user)
  )
})

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }).then(_existingUser => {
    if (_existingUser) {
      done(null, _existingUser)
    } else {
      new User({ googleId: profile.id }).save()
        .then(_newUser => done(null, _newUser))
    }
  })
}))
