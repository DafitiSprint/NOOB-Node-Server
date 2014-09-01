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
        console.log('connected!');
    },

    broadcast: function(data) {
        for(var i in this.clients)
            this.clients[i].send(data);
    }

};