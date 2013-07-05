var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync('./index.html');

app.get('/', function(req, res) {
  res.send(buffer.toString());
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});