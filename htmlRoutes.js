var path = require('path');

module.exports = function(app){


	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/home.html'));
	});

}