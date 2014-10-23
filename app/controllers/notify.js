
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

    	res.status(201).send();
    }
};