var device = require('../entities/device');
var event = require('../entities/event');
var mediator = require('../components/mediator');
//var ws = express().get('ws');

module.exports = {	
	init: function() {
		mediator.subscribe(event.ALERT, this.onAlert);
	},

	onAlert: function(data) {
		global.ws.broadcast(device.BROWSER, {"text":'uhu','color':'red'});
	}
}
