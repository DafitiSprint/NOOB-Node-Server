var type = require("./../entities/type");
var messageModule = require('./../entities/message');

module.exports = {
	OBSERVER_TYPE: "web",

	messages: {
		type.TYPE_MESSAGE_ERROR = "Mensagem de erro para web",
		type.TYPE_MESSAGE_INFO = ""
	},

	build: function(typeMessage) {
	    return messageModule.create(messages.typeMessage, OBSERVER_TYPE);
	}
}
