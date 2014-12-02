
module.exports = {
    notify: function(req, res) {

        var parameters = req.body;

        res.set({
          'Content-Type': 'json/application'
        });

        if (JSON.stringify(parameters) === '{}') {
            responseData = {
                "message": "request no body"
            }
            res.status(400).send(responseData);
        }

        var observers = getObservers(parameters.type);
        var messages = createMessages(observers, parameters.type);
        console.log(messages);
        res.status(201).send();
    }
};

function getObservers(type){
    typeEntity = require("./../entities/type");

    typeMapper = [];
    typeMapper[typeEntity.TYPE_MESSAGE_ERROR] = ["web","tv"];

    return typeMapper[type];
}

function createMessages(observers, type){
    var messages = [];

    for (i = 0; i < observers.length; i++) {
        observer = observers[i];
        builder = require("./../builders/"+ observer);
        message = builder.build(type);
        messages[messages.length] = message;
    }

    return messages;
}