// app.js

var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 8000);
var io = require('socket.io').listen(server);

// routing
app.get('/', function(req, res) {
    fs.createReadStream('zoo.html').pipe(res);
});

app.get('/css/main.css', function(req, res) {
    res.sendfile(__dirname + '/css/main.css');
});

app.get('/js/main.js', function(req, res) {
    res.sendfile(__dirname + '/js/main.js');
});

app.get('/js/paper-full.min.js', function(req, res) {
    res.sendfile(__dirname + '/js/paper-full.min.js');
});

app.get('/js/zoodraw.js', function(req, res) {
    res.sendfile(__dirname + '/js/zoodraw.js');
});

// sockets
// io.sockets.on('connection', function(client){

// 	// have to emit something to tell local person to addcube
// 	io.sockets.emit('newconnection'); 

// 	client.on('mousedown', function(){

// 		client.broadcast.emit('repeatrotate');

// 	}); 

// });
