var fs = require('fs');
var express = require('express');

var port = process.env.PORT || 8080;

var app = express.createServer(express.logger());
app.use(express.static(__dirname));

app.listen(port, function() {
  console.log("Listening on " + port);
});
