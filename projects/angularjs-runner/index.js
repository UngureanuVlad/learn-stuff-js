var express = require('express');
var app = express();
var compress = require('compression');
// gzip
app.use(compress());
app.use(express.static('public'));

app.post('/upload',function(req,res){
  console.log(req);
   res.end('finished!');
});

// actual server
var server = require('http').Server(app);

server.listen(3000);
