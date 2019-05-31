module.exports ={
    permissions: "none",
    help: `Displays a list of Gamma users. Syntax: ${prefix}gammas`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[0]) return Bot.say(room, unxa);
        Bot.say(room, `${gamma.join(', ')}`);
    }
}