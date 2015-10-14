module.exports = function(robot) {
	robot.hear(/negative/i, function(response) {
		response.send("http://lorempixel.com/400/300/cats/negative/");
	});
}
