module.exports = {
	OBSERVER_TYPE: "tv",

	messages: {
		type.TYPE_MESSAGE_ERROR = "Mensagem de erro para tv",
		type.TYPE_MESSAGE_INFO = ""
	},

	build: function(typeMessage) {
	    return messageModule.create(messages.typeMessage, OBSERVER_TYPE);
	}
}
