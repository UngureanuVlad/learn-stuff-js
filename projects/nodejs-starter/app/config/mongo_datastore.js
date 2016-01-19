module.exports = function(app){
  app.mongoose = require('mongoose');
  app.mongoose.connect('mongodb://localhost/learnstuff');
  var db = app.mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    var myUser = new app.User({name: 'user1' , password: 'pass1'});
    var myUser2 = new app.User({name: 'user2' , password: 'pass2'});
    app.User.remove({}, function(err) {
      if (!err) {
        myUser.save(function (err, myUser) {
          if (err) return console.error(err);
          myUser2.save(function (err, myUser2) {
            if (err) return console.error(err);
            app.User.findOne({ 'name': 'user1', 'password': 'pass1' }, 'name password', function (err, user) {
              if (err) return handleError(err);
              console.log('%s %s has been found in the database.', user.name, user.password) // Space Ghost is a talk show host.
            });
          });
        });
      }
      else {
        console.log("Already existing users could not be deleted!");
      }
    });
  });
}
