var hellos, mornings;
​
hellos = ["Well hello there, %", "Hey %, Hello!", "Marnin', %", "Good day, %", "Good 'aye!, %"];
​
mornings = ["Good morning, %", "Good morning to you too, %", "Good day, %", "Good 'aye!, %"];
​
module.exports = function(robot) {
  robot.hear(/(hello|good( [d'])?ay(e)?)/i, function(msg) {
    var hello;
    hello = msg.random(hellos);
    return msg.send(hello.replace("%", msg.message.user.name));
  });
  return robot.hear(/(^(good )?m(a|o)rnin(g)?)/i, function(msg) {
    var hello;
    hello = msg.random(mornings);
    return msg.send(hello.replace("%", msg.message.user.name));
  });
};
​
