var wolfram = require('wolfram-alpha').createClient(process.env.WOLFRAM_APP_KEY);

module.exports = function(robot) {
    robot.respond(/question (.+)/i, function(response) {
        var query = response.match[1];
        
        wolfram.query(query, function(err, result) {
            if (err) throw err;
            
            if (result && result.length > 0) {
                var responseTitle = result[1].title;
                var primaryPod    = result[1].subpods[0];
                
                response.reply(responseTitle + ": " + (primaryPod.image ? primaryPod.image : primaryPod.text));
            }
            else {
                response.send("I did not receive a response for that query.");
            }
        });
    });
}
