module.exports = function(app, userRepository, flash){
  app.passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

  app.passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    userRepository.findUser(app, email, password, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password' });
      }
      return done(null, user);
    });
  }
));

app.passport.serializeUser(function(user, done) {
  done(null, user.id);
});

app.passport.deserializeUser(function(id, done) {
  userRepository.findUserById(app, id, function(err, user) {
    done(err, user);
  });
});
}
