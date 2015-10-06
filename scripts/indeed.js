module.exports = function(robot) {
	robot.hear(/indeed/i, function(response) {
		response.send("https://i.imgur.com/CRIcPh.jpg");
	});
}
