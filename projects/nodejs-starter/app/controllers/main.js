module.exports = function(app, userRepository, passport){

  app.get('/',function(req,res, next){
    res.redirect('/home');
  });

  app.get('/home',function(req,res){
    console.log(req.user.id + ' ' + req.user.name);
    res.render("home");
  });
};
