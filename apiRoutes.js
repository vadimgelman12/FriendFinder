var path = require('path');
var myData = require('./friends.js');
var friends = myData.friends;

var totalDifference = 0;

//console.log(myData.friends);

module.exports = function(app){
	//Get request for the friends JSON object
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	// POST request
	app.post('/api/friends', function(req, res){

		var myMatch = {
			name: "",
			image: "",
			difference: 9999
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var userScores 	= userData.scores;

		var totalDifference = 0;

		//console.log(friends.length);

		//loop through the friends data to get each friends scores
		for(var i = 0; i < friends.length-1; i++){
			//console.log(friends[i].name);
			totalDifference = 0;

			//loop through that friends score
			for(var j = 0; j < 10; j++){
				// We calculate the absolute difference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				// if it's less than the current best match then this is new best match
				
				//console.log(friends[i].photo);
				if (totalDifference <= myMatch.difference){
					// set the values 
					myMatch.name = friends[i].name;
					myMatch.photo = friends[i].photo;
					myMatch.difference = totalDifference;
				}
			}
		}

		//console.log(myMatch.name);

		//friends.push(userData);
 
		res.json(myMatch);
	});
};


