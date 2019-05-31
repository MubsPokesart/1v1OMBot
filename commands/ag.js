module.exports ={
    permissions: "beta",
    help: `Creates an AG Tour. Syntax: ${prefix}ag`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.ag);
    }
}