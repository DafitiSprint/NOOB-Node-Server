var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();
console.log(eventEmitter);

module.exports = {

	subscribe: function(eventName, callback) {
		eventEmitter.on(eventName, callback);
		console.log('New subscriber for ' + eventName);
	},

	publish: function(eventName, data) {
		eventEmitter.emit(eventName, data);
		console.log('Publishing ' + eventName);
	}
}