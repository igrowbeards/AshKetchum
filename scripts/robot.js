module.exports = function(robot) {
	robot.hear(/killer robot me/i, function(response) {
		function random()
			{
			    var text = "";
			    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			    for( var i=0; i < 8; i++ )
			        text += possible.charAt(Math.floor(Math.random() * possible.length));

			    return text;
			}
		response.send("https://robohash.org/" + random());
	});
}


