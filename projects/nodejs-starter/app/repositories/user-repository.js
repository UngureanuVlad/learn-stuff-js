exports.findUser = function(app, email, password, callback) {
  app.User.findOne({ 'name': email, 'password': password }, 'name password', function (err, user) {
    callback(err, user);
  });
}

exports.findUserById = function(app, id, callback) {
  app.User.findById(id, function (err, user) {
    callback(err, user);
  });
}
