function expressify(app){
	app.get("api/route1",function(req,res){
		res.end();
	})

	app.get("api/route2",function(req,res){
		res.end();
	})
}


module.exports = expressify;