module.exports = function(app, userRepository, passport){

  app.get('/login', function(req,res){
    res.render('login')
  })

  app.get('/logout',function(req,res){
    res.redirect('/login');
  });


  app.post('/login', passport.authenticate(
    'local', { successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true})
  );

  app.all('*', function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  });
};
