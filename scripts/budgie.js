module.exports = function(robot) {
	robot.hear(/budgie/i, function(response) {
		response.send("http://270c81.medialib.glogster.com/media/a3/a3fe66b3be34d51ef5fe05d755aeb110a3a4cef289b00f882c77d1c5d9bf914b/20070509-budgie-jpg.jpg");
	});
}