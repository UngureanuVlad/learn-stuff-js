var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var handlebars = require('express-handlebars').create({
  defaultLayout:'main',
  helpers: {
    section: function(name, options){
      if(!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
    prettifyDate: function(timestamp) {
      var curr_date = ""+timestamp.getDate();
      var curr_month = (timestamp.getMonth());
      var curr_year = ""+timestamp.getFullYear();
      var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

      return ((curr_date.length === 1) ? "0"+ curr_date : curr_date) + " - " + monthNames[curr_month] + " - " + curr_year;
    },
    ifCond: function (v1, operator, v2, options) {
      switch (operator) {
        case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '!==':
        return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
        return options.inverse(this);
      }
    }}
  });
  var app = express();
  var compress = require('compression');
  // gzip
  app.use(compress());
  // utils
  var passport = require('passport');
  var server = require('http').Server(app);
  var path = require('path');

  // setup
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // session and passport
  app.use(cookieParser());
  app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  // actual server
  var server = require('http').Server(app);

  // app specific
  require('./app/config/mongo_datastore.js')(app);
  require('./app/config/mongo_schemas.js')(app);

  // services and repos
  var userRepository = require('./app/repositories/user-repository.js');

  // controllers
  require('./app/config/passport.js')(app, userRepository, passport);
  require('./app/controllers/login.js')(app, userRepository, passport);
  require('./app/controllers/main.js')(app, userRepository, passport);

  //socket.io
  var io = require('socket.io')(server);
  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
      // log
    });
  });


  // default error pages
  app.use(function(error, req, res, next) {
    res.render("error");
  });
  app.use(function(req, res) {
    res.status(400);
    res.render("error");
  });
  server.listen(3000);
