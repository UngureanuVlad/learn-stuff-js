module.exports = function(app){
  app.userSchema = app.mongoose.Schema({
    name: String,
    password: String
  });
  app.User = app.mongoose.model('User', app.userSchema);
}
