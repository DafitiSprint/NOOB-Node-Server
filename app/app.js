var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var WebSocketServer = require('ws').Server;
var ws = new WebSocketServer({server: server});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var IndexController = require('./controllers/index');
var WebsocketController = require('./controllers/websocket');
var NotifyController = require('./controllers/notify');

server.listen(3000);

ws.on('connection', WebsocketController.connection);
ws.broadcast = WebsocketController.broadcast;
app.set('ws', ws);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', IndexController.index);
app.get('/alert', IndexController.alert);
app.post('/notify', NotifyController.notify);
