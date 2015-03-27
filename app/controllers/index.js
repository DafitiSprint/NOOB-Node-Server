var mediator = require('../components/mediator');
var event = require('../entities/event');

module.exports = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
    },

    alert: function(req, res) {
        mediator.publish(event.ALERT);
        res.render('alert', { message: 'Alert sent to all clients' });  
    }
};