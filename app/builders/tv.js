var type = require("./../entities/type");

var OBSERVER_TYPE                     = "tv";

var messages                          = [];
messages[type.TYPE_MESSAGE_ERROR]     = "Mensagem de erro para tv";
messages[type.TYPE_MESSAGE_INFO]      = "";

this.build = function(typeMessage) {
    messageModule = require('./../entities/message');
    return messageModule.create(messages[typeMessage], OBSERVER_TYPE);
}