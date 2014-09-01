
module.exports = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
    },

    alert: function(req, res) {
        var ws = req.app.get('ws');
        ws.broadcast('apitaaa!!!');
        res.render('alert', { message: 'Alert sent to all clients' });  
    }
};