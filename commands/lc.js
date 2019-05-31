module.exports ={
    permissions: "beta",
    help: `Creates an LC Tour. Syntax: ${prefix}lc`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `${omtour.lc}`);
    }
}