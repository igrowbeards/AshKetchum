module.exports = function(robot) {
	robot.respond(/how many.+?next (?:meetup|meeting|session)/i, function(response) {
		robot.http('https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Tyler-Web-Dev&photo-host=public&page=1&fields=&order=time&desc=false&status=upcoming&sig_id=191542170&sig=fe06cd3d6cfda88304c9d407593bcbd71415f3bb')
			.header('Accept', 'application/json')
			.get()(function(err, res, body) {
				if (err) {
					response.reply("I don't know. :( meetup.com wouldn't tell me.");
				}
				else {
					var data = JSON.parse(body).results[0];
					var date = new Date(data.time);
					var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
					
					response.reply("" + data.yes_rsvp_count + " people are going to the next meetup, on " + months[date.getMonth()] + " " + date.getDate());
				}
			});
	});
}