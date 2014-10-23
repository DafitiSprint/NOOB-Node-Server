
module.exports = {
    notify: function(req, res) {

    	res.set({
		  'Content-Type': 'json/application'		
		})

    	responseData = {
    		"message": "received message",
    		"body": req.body.message+"ds"
    	}

        res.send('notify', responseData);
    }
};