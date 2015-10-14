module.exports = function(robot) {
	robot.respond(/joke me/i, function(response) {
		robot.http('http://api.icndb.com/jokes/random?firstName=Ash&lastName=Ketchum')
			.header('Accept', 'application/json')
			.get()(function(err, res, body) {
				if (err) {
					response.reply("I don't know. :( I am out of Jokes.");
				}
				else {
					var data = JSON.parse(body).value;

					response.reply(data.joke);
				}
			});
	});
}