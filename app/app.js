var app = require('express')()
var path = require('path');
var server = require('http').createServer(app);
var WebSocketServer = require('ws').Server;
var ws = new WebSocketServer({server: server});

var IndexController = require('./controllers/index');
var WebsocketController = require('./controllers/websocket');

server.listen(8083);

ws.on('connection', WebsocketController.connection);
ws.broadcast = WebsocketController.broadcast;
app.set('ws', ws);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', IndexController.index);
app.get('/alert', IndexController.alert);
