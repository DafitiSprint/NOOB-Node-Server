var url = require('url');

module.exports = {

    connection: function(ws) {
        ws.on('error', function(err, code){
            console.log(err);
            console.log(code);
        });

        ws.on('message', function(message) {
            console.log('received: %s', message);
        });

        ws.on('close', function(message) {
            console.log('closed: %s', message);
        });

        ws.upgradeReq.client.type = url.parse(ws.upgradeReq.url, true).query['type'];
        ws.upgradeReq.client.instance = require('../builders/browser');
        ws.upgradeReq.client.instance.init();
        console.log(ws.upgradeReq.client.type + ' connected!');
    },

    broadcast: function(data) {
        this.clients.forEach(function(client) {
            client.send(data);
        });
    },

    broadcastToDevice: function (device, data) {
        this.clients.forEach(function(client){
                console.log('broadcast to ' + device);
            if (client.upgradeReq.client.type == device) {
                client.send(JSON.stringify(data));
            }
        })
    }

};